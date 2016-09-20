const fs = require('fs');
const del = require('del');
const ejs = require('ejs');
const webpack = require('webpack');
const path = require('path');

// TODO: Update configuration settings
const config = {
  title: 'JOEY: The Work and Play of Joseph Burdick',        // Your website title
  url: 'http://j0ey.co',          // Your website URL
  project: 'joey-d7997',      // Firebase project. See README.md -> How to Deploy
  trackingID: 'UA-XXXXX-Y',                 // Google Analytics Site's ID
};

const tasks = new Map(); // The collection of automation tasks ('clean', 'build', 'publish', etc.)

function run(task) {
  const start = new Date();
  console.log(`Starting '${task}'...`);
  return Promise.resolve().then(() => tasks.get(task)()).then(() => {
    console.log(`Finished '${task}' after ${new Date().getTime() - start.getTime()}ms`);
  }, err => console.error(err.stack));
}

//
// Clean up the output directory
// -----------------------------------------------------------------------------
tasks.set('clean', () => del(['public/dist/*', '!public/dist/.git'], { dot: true }));

//
// Copy ./index.html into the /public folder
// -----------------------------------------------------------------------------
tasks.set('html', () => {
  const webpackConfig = require('./webpack.config');
  const assets = JSON.parse(fs.readFileSync('./public/dist/assets.json', 'utf8'));
  const template = fs.readFileSync('./public/index.ejs', 'utf8');
  const render = ejs.compile(template, { filename: './public/index.ejs' });
  const output = render({ debug: webpackConfig.debug, bundle: assets.main.js, config });
  fs.writeFileSync('./public/index.html', output, 'utf8');
});

//
// Generate sitemap.xml
// -----------------------------------------------------------------------------
tasks.set('sitemap', () => {
  const urls = require('./routes.json')
    .filter(x => !x.path.includes(':'))
    .map(x => ({ loc: x.path }));
  const template = fs.readFileSync('./public/sitemap.ejs', 'utf8');
  const render = ejs.compile(template, { filename: './public/sitemap.ejs' });
  const output = render({ config, urls });
  fs.writeFileSync('public/sitemap.xml', output, 'utf8');
});

//
// Bundle JavaScript, CSS and image files with Webpack
// -----------------------------------------------------------------------------
tasks.set('bundle', () => {
  const webpackConfig = require('./webpack.config');
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        reject(err);
      } else {
        console.log(stats.toString(webpackConfig.stats));
        resolve();
      }
    });
  });
});

//
// Build website into a distributable format
// -----------------------------------------------------------------------------
tasks.set('build', () => {
  global.DEBUG = process.argv.includes('--debug') || false;
  return Promise.resolve()
    .then(() => run('clean'))
    .then(() => run('bundle'))
    .then(() => run('html'))
    .then(() => run('sitemap'));
});

//
// Build and publish the website
// -----------------------------------------------------------------------------
tasks.set('publish', () => {
  const firebase = require('firebase-tools');
  return run('build')
    .then(() => firebase.login({ nonInteractive: false }))
    .then(() => firebase.deploy({
      project: config.project,
      cwd: __dirname,
    }))
    .then(() => { setTimeout(() => process.exit()); });
});

// tasks.set('publish', () => {
//   const remote = {
//     url: 'https://github.com/josephdburdick/Joey.git', // TODO: Update deployment URL
//     branch: 'gh-pages',
//   };
//   global.DEBUG = process.argv.includes('--debug') || false;
//   const spawn = require('child_process').spawn;
//   const opts = { cwd: path.resolve(__dirname, './public'), stdio: ['ignore', 'inherit', 'inherit'] };
//   const git = (...args) => new Promise((resolve, reject) => {
//     spawn('git', args, opts).on('close', code => {
//       if (code === 0) {
//         resolve();
//       } else {
//         reject(new Error(`git ${args.join(' ')} => ${code} (error)`));
//       }
//     });
//   });
//
//   return Promise.resolve()
//     .then(() => run('clean'))
//     .then(() => git('init', '--quiet'))
//     .then(() => git('config', '--get', 'remote.origin.url')
//       .then(() => git('remote', 'set-url', 'origin', remote.url))
//       .catch(() => git('remote', 'add', 'origin', remote.url))
//     )
//     .then(() => git('ls-remote', '--exit-code', remote.url, 'master')
//       .then(() => Promise.resolve()
//         .then(() => git('fetch', 'origin'))
//         .then(() => git('reset', `origin/${remote.branch}`, '--hard'))
//         .then(() => git('clean', '--force'))
//       )
//       .catch(() => Promise.resolve())
//     )
//     .then(() => run('build'))
//     .then(() => git('add', '.', '--all'))
//     .then(() => git('commit', '--message', new Date().toUTCString())
//       .catch(() => Promise.resolve()))
//     .then(() => git('push', 'origin', `HEAD:${remote.branch}`, '--force', '--set-upstream'));
// });

//
// Build website and launch it in a browser for testing (default)
// -----------------------------------------------------------------------------
tasks.set('start', () => {
  let count = 0;
  global.HMR = !process.argv.includes('--no-hmr'); // Hot Module Replacement (HMR)
  return run('clean').then(() => new Promise(resolve => {
    const bs = require('browser-sync').create();
    const webpackConfig = require('./webpack.config');
    const compiler = webpack(webpackConfig);
    // Node.js middleware that compiles application in watch mode with HMR support
    // http://webpack.github.io/docs/webpack-dev-middleware.html
    const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: webpackConfig.stats,
    });
    compiler.plugin('done', stats => {
      // Generate index.html page
      const bundle = stats.compilation.chunks.find(x => x.name === 'main').files[0];
      const template = fs.readFileSync('./public/index.ejs', 'utf8');
      const render = ejs.compile(template, { filename: './public/index.ejs' });
      const output = render({ debug: true, bundle: `/dist/${bundle}`, config });
      fs.writeFileSync('./public/index.html', output, 'utf8');

      // Launch Browsersync after the initial bundling is complete
      // For more information visit https://browsersync.io/docs/options
      if (++count === 1) {
        bs.init({
          port: process.env.PORT || 3000,
          ui: { port: Number(process.env.PORT || 3000) + 1 },
          server: {
            baseDir: 'public',
            middleware: [
              webpackDevMiddleware,
              require('webpack-hot-middleware')(compiler),
              require('connect-history-api-fallback')(),
            ],
          },
        }, resolve);
      }
    });
  }));
});

// Execute the specified task or default one. E.g.: node run build
run(/^\w/.test(process.argv[2] || '') ? process.argv[2] : 'start' /* default */);

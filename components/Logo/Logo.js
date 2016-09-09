import React from 'react';
import Navigation from '../Layout/Navigation';
import Link from '../Link';
import s from './Logo.css';
class Logo extends React.Component {
  constructor(){
    super();
    this.state = {
      url: '',
      width: 0,
      height: 0
    }
    this.requestImage = this.requestImage.bind(this);
  }
  componentDidMount() {
    this.requestImage({
      search: "perfect loop",
      limit: 25
    });
  }
  requestImage({search, limit, size = "fixed_height"}){
    let count = 0;
    let randomImageObj = {};
    const searchString = search.split(' ').join('+');
    const request = `http://api.giphy.com/v1/gifs/search?q=${searchString}?limit=${limit}&api_key=dc6zaTOxFJmzC`;
    fetch(request)
      .then(response => response.json())
      .then(json => {
        count = json.data.length;
        const randomIndex = Math.floor(Math.random() * count);
        randomImageObj = json.data[randomIndex];
        return randomImageObj.images[size];
      })
      .then(({width, height, url}) => {
        this.setState({width, height, url});
      })
      .catch(reason => console.log(reason));
  }

  render() {
    const svg = `
      <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" viewBox="0 0 1000 431.95" xml:space="preserve">
        <metadata id="metadata8">
          <rdf:RDF>
            <cc:Work rdf:about="">
              <dc:format>
                image/svg+xml
              </dc:format>
              <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
            </cc:Work>
          </rdf:RDF>
        </metadata>
        <defs id="defs6">
          <pattern id="graffiti" patternUnits="userSpaceOnUse" width="${this.state.width}" height="${this.state.height}">
            <image xlink:href="${this.state.url}" x="0" y="0"
                  width="${this.state.width}" height="${this.state.height}" />
          </pattern>
          <clipPath id="joey_logo">
            <path fill="url(#graffiti)" d="m0 345.56 800 0L800 0 0 0 0 345.56z" inkscape:connector-curvature="0" id="path18"/>
          </clipPath>
        </defs>
        <g transform="matrix(1.25,0,0,-1.25,0,431.95)" id="g10">
          <g id="g12">
            <g clip-path="url(#joey_logo)" id="g14">
              <g transform="translate(261.7905,110.3213)" id="g20" fill="url(#graffiti)">
                <path d="m0 0c24.73 0 44.87 20.85 44.87 46.66 0 26.14-20.14 46.99-44.87 46.99-24.73 0-44.88-20.85-44.88-46.99C-44.88 20.85-24.38 0 0 0m-71.02 116.97c19.08 19.08 44.16 29.68 69.96 29.68 27.56 0 51.23-9.54 70.32-27.56 20.15-19.09 31.1-45.23 31.1-71.03 0-28.63-9.54-52.29-28.63-71.38-19.43-19.44-43.46-29.69-72.08-29.69-28.98 0-52.3 9.89-71.74 30.39C-90.47-3.53-100 20.85-100 47.35c0 26.52 10.24 50.88 28.98 69.62" inkscape:connector-curvature="0" id="path22"/>
              </g>
              <g transform="translate(532.6299,177.1157)" id="g24" fill="url(#graffiti)">
                <path d="M0 0C-6.72 19.44-22.63 30.03-44.89 30.03-68.2 30.03-84.82 18.02-88.7 0L0 0zM47.34-59.73C28.96-99.29-2.48-119.44-44.89-119.44c-28.98 0-52.3 9.89-71.73 30.39-18.37 19.42-27.91 43.45-27.91 70.32 0 26.5 10.25 50.88 28.97 69.61 19.08 19.09 44.18 29.67 69.98 29.67 60.43 0 101.76-43.45 101.76-114.12l0-6.01-143.1 0c4.95-20.15 19.43-30.75 43.81-30.75 11.3 0 20.49 3.19 28.97 10.59l61.49 0z" inkscape:connector-curvature="0" id="path26"/>
              </g>
              <g transform="translate(640.3281,1.8525)" id="g28" fill="url(#graffiti)">
                <path d="m0 0 21.57 67.14-73.64 188.37 65.41 0 37.74-116.98 33.72 92.56 8.9 24.42 60.64 0L67.89 38.93 0 0z" inkscape:connector-curvature="0" id="path30"/>
              </g>
              <g transform="translate(37.3828,257.3647)" id="g32" fill="url(#graffiti)">
                <path d="m0 0 64.01 0 60.64 0-84.88-202.54-69.48-38.91 75.19 186.04-40.32 0-32.28 0L0 0z" inkscape:connector-curvature="0" id="path34"/>
              </g>
              <g transform="translate(129.2646,333.3784)" id="g36" fill="url(#graffiti)">
                <path d="m0 0c6.64 6.63 15.37 10.32 24.35 10.32 9.59 0 17.83-3.32 24.47-9.59 7.01-6.64 10.82-15.74 10.82-24.72 0-9.96-3.31-18.19-9.96-24.83-6.76-6.77-15.12-10.33-25.08-10.33-10.09 0-18.2 3.45-24.96 10.58-6.39 6.63-9.71 15.12-9.71 24.34 0 9.22 3.56 17.7 10.07 24.23" inkscape:connector-curvature="0" id="path38"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    `;
    return (
      <Link to="/" className={s.logo} dangerouslySetInnerHTML={{__html: svg }} />
    );
  }

}

export default Logo;

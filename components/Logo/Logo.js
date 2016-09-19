import React from 'react';
import cx from 'classnames';
import MobileDetect from 'mobile-detect';

import Link from '../Link';
import s from './Logo.css';

class Logo extends React.Component {
  constructor(){
    super();
    this.state = {
      url: "",
      backup: "data:image/png;base64,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",
      width: 0,
      height: 0,
      isMobile: false
    }
    this.requestImage = this.requestImage.bind(this);
    this.setImageState = this.setImageState.bind(this);
  }
  componentWillMount() {
    this._isMounted = false;
    const md = new MobileDetect(window.navigator.userAgent);
    this.setState({ isMobile: md.mobile() })
  }
  componentDidMount() {
    this._isMounted = true;
    this.requestImage({
      search: this.props.search,
      limit: this.props.limit,
      size: this.props.size,
      interval: !!this.state.isMobile ? false : this.props.interval
    });
  }
  setImageState({gifs, size, interval}){
    if (this._isMounted){
      const count = gifs.length;
      this.setState({
        width: 2,
        height: 2,
        url: this.state.backup
      });
      if (!interval){
        const randomIndex = Math.floor(Math.random() * count);
        const {width, height, url} = gifs[randomIndex].images[size];
        if (this._isMounted){
          this.setState({
            width,
            height,
            url
          });
        }
      } else {
        /* Instead of looping through all results, use a limit on an array of random numbers */
        let randomImageIndexArray = []
        while (randomImageIndexArray.length < this.props.limit) {
          const randomNumber = Math.ceil(Math.random() * count)
          let found = false;
          for (var i = 0; i < randomImageIndexArray.length; i++) {
            if (randomImageIndexArray[i] == randomNumber) {
              found = true;
              break;
            }
          }
          if (!found)
            randomImageIndexArray[randomImageIndexArray.length] = randomNumber;
        }
        setInterval(() => {
          /* Generate an array of [this.props.limit] number of items */
          const randomIndex = Math.floor(Math.random() * randomImageIndexArray.length );
          if (this._isMounted){
            this.setState({
              width: gifs[randomIndex].images[size].width,
              height: gifs[randomIndex].images[size].height,
              url: gifs[randomIndex].images[size].url
            });
          }
        }, interval)
      }
    }
  }

  requestImage({search, limit, size, interval}){
    let count = 0;
    let randomImageObj = {};
    const searchString = search.split(' ').join('+');
    const request = `https://api.giphy.com/v1/gifs/search?q=${searchString}?limit=${limit}&api_key=${this.props.giphyAPIkey}`;
    fetch(request)
      .then(response => response.json())
      .then(json => this.setImageState({gifs: json.data, size, interval}))
      .catch(reason => {
        /*
          Couldn't fetch an image from giphy.com,
          let's generate something random out of white binary
        */
        if (this._isMounted){
          this.setState({
            width: Math.random() * (10 - 2) + 2,
            height: Math.random() * (10 - 2) + 2,
            url: "data:image/png;base64,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"
          })
        }
        /* Is it better to throw or console.warn ? */
        console.warn(reason);
        // throw reason;
      });
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
          <pattern id="graffiti" patternTransform="scale(1, -1)" patternUnits="userSpaceOnUse" width="${this.state.width}" height="${this.state.height}">
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
      <Link to="/" className={cx([s.logo, this.props.className])} dangerouslySetInnerHTML={{__html: svg }} />
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}
Logo.defaultProps = {
  giphyAPIkey: "dc6zaTOxFJmzC",
  search: "perfect loop",
  limit: 5,
  size: "fixed_height",
  interval: 5000
};

export default Logo;

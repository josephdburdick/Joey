export function requestImage({search, limit, size, interval}){
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
          url: this.state.backup
        })
      }
      /* Is it better to throw or console.warn ? */
      console.warn(reason);
      // throw reason;
    });
}

export function setImageState({gifs, size, interval}){
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

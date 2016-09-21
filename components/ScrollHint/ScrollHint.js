import React from 'react';
import s from './ScrollHint.css';
export default class ScrollHint extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }
  componentDidMount(){
    console.log(this._hint);
  }
  render(){
    return (
      <div className={s['scroll-hint']} ref={c =>  this._hint = c}/>
    )
  }
}

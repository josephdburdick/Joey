import React from 'react';
import s from './ScrollHint.css';
export default class ScrollHint extends React.Component {
  render(){
    return (
      <div className={s['scroll-hint']} ref={c =>  this._hint = c}/>
    )
  }
}

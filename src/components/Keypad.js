// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

  phrase = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
      <input onKeyUp={this.phrase} type='password' />
      </div>
    )
  }

}

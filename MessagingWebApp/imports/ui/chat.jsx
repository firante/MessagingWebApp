import React, {Component} from 'react';

export default class Chat {
  render() {
    return (
      <div className='col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1
        col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1'>
        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
          <ul className='list-group'>

          </ul>
        </div>
        <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7'></div>
        <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'></div>
        <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>
      </div>
    );
  }
}

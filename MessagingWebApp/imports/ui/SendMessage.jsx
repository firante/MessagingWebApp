import React, {Component, PropTypes} from 'react';

export default class SendMessage extends Component {
  render () {
    return (
      <div className='form-group'>
        <label htmlFor="message">Message:</label>
        <textarea className='form-control' rows="5"></textarea>

      <button type="button" className='btn btn-success btn-sm'> Send </button>
      </div>
    );
  }
}

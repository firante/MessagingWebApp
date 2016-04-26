import React, {Component, PropTypes} from 'react';

export default class SendMessage extends Component {

  onClick() {
    console.log(this.refs.textarea.value);
  }

  render () {
    return (
      <div className='form-group'>
        <label htmlFor="message">Message:</label>
        <textarea
          className='form-control'
          rows="5"
          ref='textarea'>
        </textarea>

        <button
          type="button"
          className='btn btn-success btn-sm'
          onClick={this.onClick.bind(this)}> Send </button>
      </div>
    );
  }
}

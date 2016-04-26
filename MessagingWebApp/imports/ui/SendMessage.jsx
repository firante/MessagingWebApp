import React, {Component, PropTypes} from 'react';

export default class SendMessage extends Component {

  onClick() {
      this.props.onClick(this.props.filterCriteria, this.refs.textarea.value, Meteor.user().username);
      this.refs.textarea.value = '';
  }

  onPress(e) {
    if(e.key === 'Enter') {
      this.props.onClick(this.props.filterCriteria, this.refs.textarea.value, Meteor.user().username);
      this.refs.textarea.value = '';
    }
  }

  render () {
    return (
      <div className='form-group'>
        <label htmlFor="message">Message:</label>
        <textarea
          className='form-control'
          rows="5"
          ref='textarea'
          onKeyPress={this.onPress.bind(this)}>
        </textarea>

        <button
          type="button"
          className='btn btn-success btn-sm'
          onClick={this.onClick.bind(this)}> Send </button>
      </div>
    );
  }
}

SendMessage.propTypes = {
  filterCriteria : PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

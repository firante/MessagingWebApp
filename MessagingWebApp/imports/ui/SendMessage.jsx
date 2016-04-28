/*
* class for render component what wil sending messages
*/

import React, {Component, PropTypes} from 'react';

export default class SendMessage extends Component {

  // handle click for send message
  onClick() {
    if(this.props.checkPrivate) {
      Meteor.call('sendPrivateMessage', this.props.filterCriteria, this.refs.textarea.value, Meteor.user().username);
    } else {
      Meteor.call('sendMessage', this.props.filterCriteria, this.refs.textarea.value, Meteor.user().username);
    }
      this.refs.textarea.value = '';
  }

  // handle press Enter for send message
  onPress(e) {
    if(e.key === 'Enter') {
      if(this.props.checkPrivate) {
        Meteor.call('sendPrivateMessage', this.props.filterCriteria, this.refs.textarea.value, Meteor.user().username);
      } else {
        Meteor.call('sendMessage', this.props.filterCriteria, this.refs.textarea.value, Meteor.user().username);
      }
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
  filterCriteria : PropTypes.string.isRequired, // prop for check region or pair of users for decided where message will be writed
  checkPrivate: PropTypes.bool.isRequired // prop for check if this char is private or public
}

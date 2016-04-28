/*
* class for render message list
*/

import React, {Component, PropTypes} from 'react';

import MessagesList from './MessagesList.jsx';
import {updateScroll} from '../api/support.jsx';

export default class Messages extends Component {

  componentDidMount() {
    updateScroll(); // update scroll in message list component to bottom
  }

  componentDidUpdate() {
     updateScroll();
  }

  // List of messages in selected region
  renderMessagesList() {
    if(this.props.messagesInReg.messages.length > 0) {
      return this.props.messagesInReg.messages.map((value, index) => {
         return <MessagesList key={index} message={value} />
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className='pre-scrollable' id='div_mes'>
        {this.renderMessagesList()}
      </div>
    );
  }
}

Messages.propTypes = {
  messagesInReg: PropTypes.object.isRequired
}

import React, {Component, PropTypes} from 'react';

import MessagesList from './MessagesList.jsx';

export default class Messages extends Component {

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
      <div className='well'>
        {this.renderMessagesList()}
      </div>
    );
  }
}

Messages.propTypes = {
  messagesInReg: PropTypes.object.isRequired
}

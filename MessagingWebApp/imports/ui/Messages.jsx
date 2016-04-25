import React, {Component, PropTypes} from 'react';

import MessagesList from './MessagesList.jsx';

export default class Messages extends Component {
  // List of messages in selected region
  renderMessagesList() {
    console.log(this.props.messagesInReg.messages);
    if(this.props.messagesInReg.messages) {
      return this.props.messagesInReg.messages.map((value, index) => {
        return <MessagesList key={index} message={value} />
      });
    }
  }

  render() {
    <div className='well'>
      {this.renderMessagesList()}
    </div>
  }
}

Messages.propTypes = {
  messagesInReg: PropTypes.object.isRequired
}

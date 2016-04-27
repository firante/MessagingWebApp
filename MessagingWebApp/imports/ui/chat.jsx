import React, {Component, PropTypes} from 'react';

import UsersList from './usersList.jsx';
import Messages from './Messages.jsx';
import SendMessage from './SendMessage.jsx';

export default class Chat extends Component{
  renderUsers() {
    return this.props.users.map( (value) => {
      if(value.username !== Meteor.user().username) {
        if(this.props.onDoubleClick) {
          return <UsersList key={value._id} user={value.username} checkPrivate={this.props.checkPrivate} update={this.props.update}/>
        } else {
          return <UsersList key={value._id} user={value.username} />
        }
    }
    } );
  }

  renderMessage() {
    return this.props.messagesObj ? <Messages messagesInReg={this.props.messagesObj} /> : null;
  }

  renderSendMessage() {
    return this.props.messagesObj && this.props.onClick ?
      <SendMessage filterCriteria={this.props.messagesObj._id} checkPrivate={this.props.checkPrivate}/> : null;
  }

  render() {
    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
          <ul className='list-group'>
            {this.renderUsers()}
          </ul>
        </div>
        <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
          {this.renderMessage()}
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          {this.renderSendMessage()}
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  users: PropTypes.array.isRequired,
  messagesObj: PropTypes.object.isRequired,
  checkPrivate: PropTypes.bool.isRequired
}

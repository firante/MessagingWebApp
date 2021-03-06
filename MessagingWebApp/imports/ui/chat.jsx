/*
* class for render chat component
*/

import React, {Component, PropTypes} from 'react';

import UsersList from './usersList.jsx';
import Messages from './Messages.jsx';
import SendMessage from './SendMessage.jsx';

export default class Chat extends Component{

  //method for render users list to chat component
  renderUsers() {
    return this.props.users.map( (value) => {
      if(value.username !== Meteor.user().username) {
        if(this.props.checkPrivate) {
          return <UsersList key={value._id} user={value.username} checkPrivate={this.props.checkPrivate} update={this.props.update}/>
        } else {
          return <UsersList key={value._id} user={value.username} checkPrivate={this.props.checkPrivate}/>
        }
    }
    } );
  }

  //method for render message list to chat component
  renderMessage() {
    return this.props.messagesObj ? <Messages messagesInReg={this.props.messagesObj} /> : null;
  }

  //method for render send message component
  renderSendMessage() {
    return this.props.messagesObj ?
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
  checkPrivate: PropTypes.bool.isRequired
}

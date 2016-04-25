import React, {Component, PropTypes} from 'react';

export default class MessagesList extends Component {
  // one message
  renderMessage () {
    let align = this.props.message.user === Meteor.user().username ? 'bg-success text-right' : 'br-info text-left';
    return (
      <div className={align}>
        <p className='small'>{this.props.message.user}</p>
        <p className='small'>{this.props.message.date}</p>
        <p> {this.props.message.message} </p>
      </div>
    );
  }

  render () {
    {this.renderMessage()}
  }
}

MessagesList.propTypes = {
  message: PropTypes.object.isRequired
}

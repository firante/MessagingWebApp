import React, {Component, PropTypes} from 'react';

export default class MessagesList extends Component {
  // one message
  renderMessage () {
    let align = this.props.message.user === Meteor.user().username ? 'bg-success text-right' : 'bg-info text-left';
    return (
      <div className={align}>
        <h6 className='small'>{this.props.message.user}	&nbsp;	&nbsp; {this.props.message.date.toString()}</h6>
        
        <h5> {this.props.message.message} </h5>
      </div>
    );
  }

  render () {
    return this.renderMessage();
  }
}

MessagesList.propTypes = {
  message: PropTypes.object.isRequired
}

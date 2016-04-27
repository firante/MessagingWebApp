import React, {Component, PropTypes} from 'react';

import RegionElement from './RegionElement.jsx';

export default class RegionSelector extends Component {

	clickChUserName() {
		Meteor.call('changeUserName', Meteor.userId(), this.refs.username.value);
		this.refs.username.value = '';
	}

	clickChEmail() {
		let newEmail = this.refs.email.value;

		if(newEmail.indexOf('@') <= 0) {
			alert('Input valid Email!')
		} else {
			Meteor.call('changeEmail', Meteor.userId(), newEmail);
		}
		this.refs.email.value = '';
	}

	renderRegions() {
		return this.props.regions.map(value =>
			<RegionElement key={value._id} regions={value} onClick={this.props.onClick}/>
		);
	}

	render () {
		return (
			<div >
				<button className='btn btn-default' type='button' data-toggle='modal'  data-target='#changeUserName'>
					Change username
				</button>

				<button className='btn btn-default' type='button' data-toggle='modal'  data-target='#changeEmail'>
					Change email
				</button>
				<div className='btn-group'>
					<button className='btn btn-primary' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
						Regions
						<span className='caret'> </span>
					</button>

					<ul className='dropdown-menu'>
						{this.renderRegions()}
					</ul>
				</div>

				<div className='modal fade' id='changeUserName' tabindex='-1' role='dialog' aria-labelledby='changeUserNameLabel'>
					<div className='modal-dialog' role='document'>
						<div className='modal-content'>
							<div className='modal-header'>
								<button type='button' className='close' date-dismiss='modal' aria-label='Close'>
									<span aria-hidden='true'> &times; </span>
 								</button>
								<h4 className='modal-title' id='changeUserNameLabel'> Change user name </h4>
							</div>
							<div className='modal-body'>
								<input type='text' className='form-control' ref='username' placeholder='input new usernsme' />
							</div>
							<div className='modal-footer'>
								<button type='button' className='btn btn-primary' onClick={this.clickChUserName.bind(this)} data-dismiss='modal'> Save </button>
								<button type='button' className='btn btn-default' data-dismiss='modal'> Close </button>
							</div>
						</div>
					</div>
				</div>

				<div className='modal fade' id='changeEmail' tabindex='-1' role='dialog' aria-labelledby='changeEmailLabel'>
					<div className='modal-dialog' role='document'>
						<div className='modal-content'>
							<div className='modal-header'>
								<button type='button' className='close' date-dismiss='modal' aria-label='Close'>
									<span aria-hidden='true'> &times; </span>
								</button>
								<h4 className='modal-title' id='changeEmailLabel'> Change email </h4>
							</div>
							<div className='modal-body'>
								<input type='text' className='form-control' ref='email' placeholder='input new email' />
							</div>
							<div className='modal-footer'>
								<button type='button' className='btn btn-primary' onClick={this.clickChEmail.bind(this)} data-dismiss='modal'> Save </button>
								<button type='button' className='btn btn-default' data-dismiss='modal'> Close </button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

RegionElement.propTypes = {
	onClick: PropTypes.func.isRequired
};

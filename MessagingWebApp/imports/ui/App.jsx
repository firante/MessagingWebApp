import React, {Component, PropTypes} from 'react';
import AccountUIWrapper from './AccountsUIWrapper.jsx';
import {createContainer} from 'meteor/react-meteor-data';
import { getRegions } from '../api/events.jsx';
import RegionSelector from './regionSelector.jsx';

class App extends Component {

	render() {
		let regionSelector;

		if(this.props.user) {
			regionSelector = <RegionSelector regions={this.props.regions}/>;
		}

		return(
			<div className='col-xs-12 col-sm-12 colmd-12 col-lg-12'>
				<div className='col-xs-12 col-sm-12 colmd-12 col-lg-12'>
					<AccountUIWrapper />
				</div>

				<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-right'>
					{regionSelector}
				</div>

				<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
				</div>
			</div>
		)
	}
}

export default createContainer ( () => {
	return {
		regions: getRegions(),
		user: Meteor.user()
	};
}, App);

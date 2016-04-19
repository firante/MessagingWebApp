import React, {Component, PropTypes} from 'react';
import AccountUIWrapper from './AccountsUIWrapper.jsx';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import '../startup/accounts-config.js';

export default class App extends Component {

	render() {
		return(
			<div className='col-xs-12 col-sm-12 colmd-12 col-lg-12'>
				<div className='col-xs-12 col-sm-12 colmd-12 col-lg-12'>
					<AccountUIWrapper />
				</div>

				<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-right' id='regions'>
				</div>
			</div>
		)
	}
}

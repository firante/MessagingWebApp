import React, {Component} from 'react';
import AccountUIWrapper from './AccountsUIWrapper.jsx';
import { render } from 'react-dom';

import '../startup/accounts-config.js';

export default class App extends Component {
	render() {
		return(
			<AccountUIWrapper />
		)
	}
}

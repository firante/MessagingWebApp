import React, {Component} from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import RegionElement from './RegionElement.jsx'

export default class RegionSelector extends Component {
	renderRegions() {
		Meteor.subscribe('regions');
		let regList = regions.find().fetch();
		var list = regList.map(function(value, index) {
			console.log(value);
			return <RegionElement key={index} regions={value} />
		}); 
		return list;
	}

	render () {
		return (
			<div className='btn-group'>
				<button className='btn btn-default' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
					Regions
					<span className='caret'> </span>
				</button>

				<ul className='dropdown-menu'>
					{this.renderRegions()}
				</ul>
			</div>
		);
	}
}
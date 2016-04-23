import React, {Component} from 'react';

import RegionElement from './RegionElement.jsx';

export default class RegionSelector extends Component {

	renderRegions() {
		return this.props.regions.map(value =>
			<RegionElement key={value._id} regions={value} />
		);
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

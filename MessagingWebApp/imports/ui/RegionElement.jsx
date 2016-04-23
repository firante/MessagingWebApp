import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';
import { render } from 'react-dom';

export default class RegionElement extends Component {
	onClick() {
			this.props.onClick(this.props.regions.regionName);
	}

	render() {
		return (
			<li>
				<a
					onClick={this.onClick}
					className='btn'> {this.props.regions.regionName}
				</a>
			</li>
		);
	}
}

RegionElement.propTypes = {
	regions: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired
};

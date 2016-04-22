import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';
import { render } from 'react-dom';

export default class RegionElement extends Component {
	render() {
		return (
			<li> 
				<a 
					id={'region_'+this.props.regions._id}
					className='btn'> {this.props.regions.regionName} 
				</a>
			</li>
		);
	}
}

RegionElement.propTypes = {
	regions: PropTypes.object.isRequired
};


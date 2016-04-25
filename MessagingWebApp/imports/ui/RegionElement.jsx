import React, {Component, PropTypes} from 'react';
import { render } from 'react-dom';

export default class RegionElement extends Component {
	onClick() {
		// region button clicked event
		this.props.onClick(this.props.regions._id, this.props.regions.regionName, Meteor.user().username);
		// render chat body component
		Session.set('regionName', this.props.regions.regionName);
	}

	render() {
		return (
			<li>
				<a
					onClick={this.onClick.bind(this)}
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

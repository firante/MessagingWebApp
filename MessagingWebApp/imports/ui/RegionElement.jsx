import React, {Component, PropTypes} from 'react';
import { render } from 'react-dom';

export default class RegionElement extends Component {
	onClick() {
		// region button clicked event
		Meteor.call('openRegion', Meteor.userId(), this.props.regions._id, this.props.regions.regionName);
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
	regions: PropTypes.object.isRequired
};

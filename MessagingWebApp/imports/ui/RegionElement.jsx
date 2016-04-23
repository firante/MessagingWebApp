import React, {Component, PropTypes} from 'react';

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
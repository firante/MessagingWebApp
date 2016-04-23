import React, {Component, PropTypes} from 'react';

export default class UsersList extends Component {
	// onClick() {
	// 		this.props.onClick(this.props.regions.regionName);
	// }

	render() {
		return (
			<li className='list-group-item'>  </li>
		);
	}
}

RegionElement.propTypes = {
	regions: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired
};

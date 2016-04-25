import React, {Component, PropTypes} from 'react';

export default class UsersList extends Component {
	// onClick() {
	// 		this.props.onClick(this.props.regions.regionName);
	// }

	render() {
		return (
			<li className='list-group-item'> {this.props.user} </li>
		);
	}
}

UsersList.propTypes = {
	user: PropTypes.string.isRequired
//	onClick: PropTypes.func.isRequired
};

import React, {Component} from 'react';

export default class extend Component {
	render() {
		return (
			<li> 
				<a 
					className='btn'
					onClick = {}> {this.props.regions.regionName} 
				</a>
			</li>
		);
	}
}
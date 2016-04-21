import React, {Component} from 'react';

export default class RegionSelector extends Component {
	handleClick() {
		console.log(this);
	}

	render () {
		return (
			<div className='btn-group'>
				<button className='btn btn-default' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
					Regions
					<span className='caret'> </span>
				</button>

				<ul className='dropdown-menu'>
					<li> 
						<a 
							className='btn'
							onClick = {this.handleClick.bind(this)}> Lviv 
						</a>
					</li>
					<li> 
						<a 
							className='btn'
							onClick = {this.handleClick.bind(this)}> Brody 
						</a>
					</li>
					<li> 
						<a 
							className='btn'
							onClick = {this.handleClick.bind(this)}> Pidkamin 
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
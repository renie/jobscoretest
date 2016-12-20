import React, { Component } from 'react';

class ListItem extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	
	toggleDetails(e) {
		let details = e.nativeEvent.target.parentNode.querySelector('.details');

		if (details.classList.contains('show'))
			details.classList.remove('show');
		else
			details.classList.add('show');
	}
	

	render() {
		return (
			<li>
				<header className="clearfix" onClick={ (e) => this.toggleDetails(e)}>
					<h3>{this.props.item.attributes.title}</h3>
					{this.props.item.attributes.published && <p className="published">Published</p>}
				</header>
				<div className="details">
					<dl className="clearfix">
						<dt>Description:</dt>
						<dd>{this.props.item.attributes.description}</dd>

						<dt>Status:</dt>
						<dd>{this.props.item.attributes.status}</dd>
						
						<dt>Level:</dt>
						<dd>{this.props.item.attributes.career_level}</dd>

						<dt>Max. Salary:</dt>
						<dd>R$ {this.props.item.attributes.salary_maximum}</dd>

						<dt>Min. Salary:</dt>
						<dd>R$ {this.props.item.attributes.salary_minimum}</dd>
					</dl>
				</div>
			</li>
		);
	}
}

export default ListItem;

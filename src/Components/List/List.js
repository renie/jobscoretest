import React, { Component } from 'react';
import JobList from '../../Entity/Job/JobList';
import ListItem from './ListItem';
import AddBox from '../../Components/AddBox/AddBox';
import Jaiminho from 'jaiminho';
import './List.scss';

class List extends Component {
	
	constructor() {
		super();
		this.state = {};
		this.jobs = null;
		this.JobList = new JobList()
		this.Jaiminho = new Jaiminho();
		this.Jaiminho.addListener('tag', 'updatelist', this.populateJobs.bind(this));

		this.populateJobs();
	}

	
	toggleModal(e) {
		let btnClassList = e.target.classList;

		if (btnClassList.contains('active')) {
			this.Jaiminho.trigger('tag', 'closemodal');
			btnClassList.remove('active');
		} else {
			this.Jaiminho.trigger('tag', 'openmodal');
			btnClassList.add('active');
		}

	}

	
	populateJobs() {
		this.JobList.getJobs(
			(jobs) => {
				this.jobs = jobs;
				this.setState({listItems : jobs.map((job) => <ListItem key={job.id} item={job}/>)})}
		);
	}

	render() {
		return (
			<div>
				<button className="addBtn" onClick={ (e) => this.toggleModal(e)}>+</button>
				<AddBox/>
				<ul className="joblist">
					{this.state.listItems}
				</ul>
			</div>
		);
	}
}

export default List;

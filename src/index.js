import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import JobList from './Entity/Job/JobList';
import Jaiminho from 'jaiminho';
import Job from './Entity/Job/Job';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

var list = new JobList();
let jaiminho = new Jaiminho();

jaiminho.addListener('js', 'updatelist', () => {
	let id = list.list[0].id;
	let job = new Job({id: id});

	window.Job = Job;
});

list.getJobs();


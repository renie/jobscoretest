import React, { Component } from 'react';
import './AddBox.scss';
import Job from '../../Entity/Job/Job';
import Jaiminho from 'jaiminho';

class AddBox extends Component {

	constructor() {
		super();

		this.Jaiminho = new Jaiminho();
		this.Jaiminho.addListener('tag', 'closemodal', this.closeModal.bind(this));
		this.Jaiminho.addListener('tag', 'openmodal', this.openModal.bind(this));

		this.state = {
			form_title: '',
			form_description: '',
			form_status: 'open',
			form_job_types: ['full_time','contract'],
			form_career_level: 'student',
			form_salary_minimum: '',
			form_salary_maximum: '',
			form_hourly_minimum: '',
			form_hourly_maximum: '',
			form_publish: '',
			form_msg: ''
		};
	}

	handleChange(event) {
		let newstate	= {},
			target		= event.target,
			newvalue;
		
		if (target.multiple)
			newvalue	= [].slice.call(target.querySelectorAll('option:checked'), 0).map((v) => v.value);
		else if (target.type === "checkbox")
			newvalue	= target.checked;
		else
			newvalue	= target.value;

		newstate[target.id] = newvalue;

		this.setState(newstate);
	}

	openModal() {
		document.querySelector('#modal').classList.add('active');
	}

	closeModal(e) {
		document.querySelector('#modal').classList.remove('active');
	}

	saveJob(e) {
		e.preventDefault();

		let job		= new Job({
			attributes : {
				title			: this.state.form_title,
				description		: this.state.form_description,
				status			: this.state.form_status,
				job_types		: this.state.form_job_types,
				career_level	: this.state.form_career_level,
				salary_minimum	: this.state.form_salary_minimum,
				salary_maximum	: this.state.form_salary_maximum,
				hourly_minimum	: this.state.form_hourly_minimum,
				hourly_maximum	: this.state.form_hourly_maximum,
				published		: this.state.form_publish
			}
		});

		debugger;;
		job.save((data) => {
			document.querySelector('#msg').innerHTML = 'Job included successfully!';
		});
	}

	render() {
		return (
			<div id="modal">
				<div id="mask" onClick={ (e) => this.closeModal(e)}></div>
				<div id="addbox">
					<h4>Create Job</h4>

					<form className="form">

						<div className="field-doubleline clearfix">
							<label htmlFor="form_title">Title*:</label>
							<input type="text" id="form_title" required="required" value={this.state.form_title} onChange={this.handleChange.bind(this)}/>
						</div>

						<div className="field-doubleline clearfix">
							<label htmlFor="form_description">Description*:</label>
							<textarea id="form_description" required="required" value={this.state.form_description} onChange={this.handleChange.bind(this)}/>
						</div>

						<div className="field-doubleline clearfix">
							<label htmlFor="form_status">Status*:</label>
							<select id="form_status" onChange={this.handleChange.bind(this)} value={this.state.form_status}>
								<option value="open">open</option>
								<option value="on_hold">on_hold</option>
								<option value="filled">filled</option>
								<option value="closed">closed</option>
							</select>
						</div>

						<div className="field-doubleline clearfix">
							<label htmlFor="form_job_types">Job Type:</label>
							<select id="form_job_types" onChange={this.handleChange.bind(this)} value={this.state.form_job_types} multiple>
								<option value="full_time">full_time</option>
								<option value="part_time">part_time</option>
								<option value="contract">contract</option>
								<option value="temporary">temporary</option>
								<option value="temp_to_perm">temp_to_perm</option>
								<option value="internship">internship</option>
								<option value="volunteer">volunteer</option>
							</select>
						</div>

						<div className="field-doubleline clearfix">
							<label htmlFor="form_career_level">Carreer Level*:</label>
							<select id="form_career_level" onChange={this.handleChange.bind(this)} value={this.state.form_career_level}>
								<option value="student_high_school">Student (High School)</option>
								<option value="student">Student</option>
								<option value="entry_level">Entry Level</option>
								<option value="mid_level">Mid-Level</option>
								<option value="experienced_non_manager">Experienced (Non-Manager)</option>
								<option value="manager">Manager (Manager/Supervisor of Staff)</option>
								<option value="executive">Executive (SVP, VP, Director, etc.)</option>
								<option value="senior_executive">Senior Executive (President, CFO, etc.)</option>
							</select>
						</div>

						<div className="field-doubleline clearfix">
							<label htmlFor="form_salary_minimum">Min. salarium:</label>
							<input type="text" value={this.state.form_salary_minimum} className="doubleField" id="form_salary_minimum" pattern="[0-9]+" title="Only integers on this field (value in cents)" onChange={this.handleChange.bind(this)}/>
							
							<label htmlFor="form_salary_maximum">Max. salarium:</label>
							<input type="text" value={this.state.form_salary_maximum} className="doubleField" id="form_salary_maximum" pattern="[0-9]+" title="Only integers on this field (value in cents)" onChange={this.handleChange.bind(this)}/>
						</div>

						<div className="field-doubleline clearfix">
							<label htmlFor="form_hourly_minimum">Min. hourly:</label>
							<input type="text" value={this.state.form_hourly_minimum} className="doubleField" id="form_hourly_minimum" pattern="[0-9]+" title="Only integers on this field (value in cents)" onChange={this.handleChange.bind(this)}/>
							
							<label htmlFor="form_hourly_maximum">Max. hourly:</label>
							<input type="text" value={this.state.form_hourly_maximum} className="doubleField" id="form_hourly_maximum" pattern="[0-9]+" title="Only integers on this field (value in cents)" onChange={this.handleChange.bind(this)}/>
						</div>
						
						<div className=" clearfix">
							<input type="checkbox" id="form_publish" onChange={this.handleChange.bind(this)} value={this.state.form_publish}/>
							<label htmlFor="form_publish">Publish</label>
						</div>

						<button type="submit" onClick={ (e) => this.saveJob(e)}>Salvar</button>
					</form>

					<p id="msg">{this.state.form_msg}</p>
				</div>
			</div>
		);
	}
}

export default AddBox;

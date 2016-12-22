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
	}

	openModal() {
		document.querySelector('#modal').classList.add('active');
	}

	closeModal(e) {
		/*document.querySelector('input#form_cad_weight').value = '';
		document.querySelector('input#form_cad_age').value = '';
		document.querySelector('input#form_cad_price').value = '';
		document.querySelector('#msg').innerHTML = '';*/
		
		document.querySelector('#modal').classList.remove('active');
	}

	saveCow(e) {
		e.preventDefault();

		var weightFld	= document.querySelector('input#form_cad_weight'),
			ageFld		= document.querySelector('input#form_cad_age'),
			priceFld	= document.querySelector('input#form_cad_price')


/*		let cow		= new Cow({
			weight: weightFld.value,
			age: 	ageFld.value,
			price: 	priceFld.value
		});

		cow.save((data) => {
			document.querySelector('#msg').innerHTML = 'Vaca incluída com sucesso';

			weightFld.value = "";
			ageFld.value	= "";
			priceFld.value	= "";
		});*/
	}

	render() {
		return (
			<div id="modal">
				<div id="mask" onClick={ (e) => this.closeModal(e)}></div>
				<div id="addbox">
					<h4>Create Job</h4>

					<form className="form">

						<div className="field-doubleline">
							<label htmlfor="form_title">Title:</label>
							<input type="text" id="form_title" required="required"/>
						</div>
						<input type="text" id="form_description" placeholder="Description" required="required"/>
						<label htmlfor="form_status">Status:</label>
						<select id="form_status">
							<option value="open">open</option>
							<option value="on_hold">on_hold</option>
							<option value="filled">filled</option>
							<option value="closed">closed</option>
						</select>
						<select id="form_job_types" multiple>
							<option value="full_time">full_time</option>
							<option value="part_time">part_time</option>
							<option value="contract">contract</option>
							<option value="temporary">temporary</option>
							<option value="temp_to_perm">temp_to_perm</option>
							<option value="internship">internship</option>
							<option value="volunteer">volunteer</option>
						</select>
						<select id="form_career_level">
							<option value="student_high_school">Student (High School)</option>
							<option value="student">Student</option>
							<option value="entry_level">Entry Level</option>
							<option value="mid_level">Mid-Level</option>
							<option value="experienced_non_manager">Experienced (Non-Manager)</option>
							<option value="manager">Manager (Manager/Supervisor of Staff)</option>
							<option value="executive">Executive (SVP, VP, Director, etc.)</option>
							<option value="senior_executive">Senior Executive (President, CFO, etc.)</option>
						</select>
						<input type="text" id="form_salary_minimum" placeholder="Min. salarium" pattern="[0-9]+" title="Only integers on this field"/>
						<input type="text" id="form_salary_maximum" placeholder="Max. salarium" pattern="[0-9]+" title="Only integers on this field"/>
						<input type="text" id="form_salary_maximum" placeholder="Max. salarium" pattern="[0-9]+" title="Only integers on this field"/>
						<input type="text" id="form_salary_maximum" placeholder="Max. salarium" pattern="[0-9]+" title="Only integers on this field"/>
						<button type="submit" onClick={ (e) => this.saveCow(e)}>Salvar</button>
					</form>

					<p id="msg"></p>
				</div>
			</div>
		);
	}
}

export default AddBox;

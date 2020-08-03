import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { FORM_FIELDS } from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formvalues, submitSurvey }) => {
	const reviewFields = _.map(FORM_FIELDS, ({ name, label }) => {
		return (
			<div key={`${name} ${label}`}>
				<label>{label}</label>
				<div>{formvalues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button className='yellow darken-3 btn-flat' onClick={onCancel}>
				back
			</button>
			<button className='green white-text btn-flat right' onClick={() => submitSurvey(formvalues)}>
				Send Survey
				<i className='material-icons right'>email</i>
			</button>
		</div>
	);
};

const mapStateToProps = state => {
	const values = state.form.SurveyForm.values;
	return { formvalues: values };
};

export default connect(mapStateToProps, actions)(SurveyFormReview);

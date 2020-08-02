import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { FORM_FIELDS } from './formFields';

const SurveyFormReview = ({ onCancel, formvalues }) => {
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
		</div>
	);
};

const mapStateToProps = state => {
	const values = state.form.SurveyForm.values;
	return { formvalues: values };
};

export default connect(mapStateToProps)(SurveyFormReview);

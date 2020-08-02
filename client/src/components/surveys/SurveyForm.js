import _ from 'lodash';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import { FORM_FIELDS } from './formFields';

const renderFields = props => {
	return _.map(FORM_FIELDS, ({ name, label }, index) => {
		return <Field key={`${name}: ${index}`} component={SurveyField} name={name} label={label} type='text' />;
	});
};

const SurveyForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
				{renderFields()}
				<Link className='red btn-flat left white-text' to='/surveys'>
					Cancel
				</Link>
				<button className='teal btn-flat right white-text' type='submit'>
					Next
					<i className='material-icons right'>done</i>
				</button>
			</form>
		</div>
	);
};

const validate = values => {
	const errors = {};

	errors.emails = validateEmails(values.emails || '');

	_.each(FORM_FIELDS, ({ name, noValuesError }) => {
		if (!values[name]) {
			errors[name] = noValuesError;
		}
	});

	return errors;
};

export default reduxForm({
	validate,
	form: 'SurveyForm',
	destroyOnUnmount: false
})(SurveyForm);

import _ from 'lodash';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
	{ label: 'Survey Title', name: 'title', noValuesError: 'You must provide a title' },
	{ label: 'Subject Line', name: 'subject', noValuesError: 'You must provide a subject' },
	{ label: 'Email Body', name: 'body', noValuesError: 'You must provide text for email body' },
	{ label: 'Recipient List', name: 'emails', noValuesError: 'provide emails' }
];

const renderFields = props => {
	return _.map(FIELDS, ({ name, label }, index) => {
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

	_.each(FIELDS, ({ name, noValuesError }) => {
		if (!values[name]) {
			errors[name] = noValuesError;
		}
	});

	return errors;
};

export default reduxForm({
	validate,
	form     : 'SurveyForm'
})(SurveyForm);

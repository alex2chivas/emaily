import _ from 'lodash';
import React from 'react';
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';

const FIELDS = [
	{ label: 'Survey Title', name: 'title' },
	{ label: 'Subject Line', name: 'subject' },
	{ label: 'Body', name: 'body' },
	{ label: 'Recipient List', name: 'emails' }
];

const renderFields = () => {
	return _.map(FIELDS, ({ name, label }, index) => {
		return <Field key={`${name}: ${index}`} component={SurveyField} name={name} label={label} type='text' />;
	});
};

const SurveyForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit(values => console.log(values))}>
				{renderFields()}
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default reduxForm({
	form: 'SurveyForm'
})(SurveyForm);

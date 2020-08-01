import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';

const SurveyForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit(values => console.log(values))}>
				<Field type='text' name='surveyTitle' component={SurveyField} />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default reduxForm({
	form: 'SurveyForm'
})(SurveyForm);

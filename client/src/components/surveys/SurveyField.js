import React from 'react';

const SurveyField = ({ input, label }, { touched, error }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} />
			{touched && error && <span>{error}</span>}
		</div>
	);
};

export default SurveyField;

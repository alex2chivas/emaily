import moment from 'moment';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

const renderSurveys = surveys => {
	return surveys.reverse().map((survey, index) => {
		return (
			<div className='card blue-grey darken-1 white-text' key={`${survey._id}${index}`}>
				<div className='card-content'>
					<span className='card-title'>{survey.title}</span>
					<p>{survey.body}</p>
					<p className='right'>{`Sent On: ${moment(survey.dateSent).format('LL')}`}</p>
				</div>
				<div className='card-action'>
					<a>Yes: {survey.yes}</a>
					<a>No: {survey.no}</a>
				</div>
			</div>
		);
	});
};

const SurveyList = ({ fetchSurveys, surveys }) => {
	useEffect(() => {
		fetchSurveys();
	}, []);

	return <div>{renderSurveys(surveys)}</div>;
};

const mapStateToProps = ({ surveys }) => {
	return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);

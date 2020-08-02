import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';
import * as actions from '../actions';
import DashBoard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

const App = props => {
	useEffect(() => {
		props.fetchUser();
	}, []);

	return (
		<BrowserRouter>
			<div className='container'>
				<Header />
				<Switch>
					<Route path='/' exact component={Landing} />
					<Route path='/surveys' exact component={DashBoard} />
					<Route path='/surveys/new' exact component={SurveyNew} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default connect(null, actions)(App);

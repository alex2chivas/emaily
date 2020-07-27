import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';
import * as actions from '../actions';

const Serveys = () => <h1>Dashboard</h1>;

const App = props => {
	useEffect(() => {
		props.fetchUser();
	}, []);

	return (
		<div className='container'>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path='/' exact component={Landing} />
					<Route path='/surveys' exact component={Serveys} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default connect(null, actions)(App);

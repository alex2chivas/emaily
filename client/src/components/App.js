import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import * as actions from '../actions';

const Home = () => <h2>Hello from home</h2>;
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
					<Route path='/' exact component={Home} />
					<Route path='/surveys' exact component={Serveys} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default connect(null, actions)(App);

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';

const Home = () => <h2>Hello from home</h2>;

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path='/' exact component={Home} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;

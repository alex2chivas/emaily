import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Header = () => <h2>Hello from header</h2>;
const HeaderDash = () => <h2>Hello from Dash</h2>;

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Header} />
				<Route path='/headerdash' exact component={HeaderDash} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import StripePayment from './StripePayment';

const renderContent = props => {
	switch (props.auth) {
		case null:
			return;
		case false:
			return (
				<li>
					<a href='/auth/google'>Login with Google</a>
				</li>
			);
		default:
			return [
				<li key={1}>
					<StripePayment />
				</li>,
				<li key={2} style={{ margin: '0 15px' }}>{`credits: ${props.auth.credits}`}</li>,
				<li key={3}>
					<a href='/api/logout'>Logout</a>
				</li>
			];
	}
};

const Header = props => {
	return (
		<nav>
			<div className='nav-wrapper'>
				<Link
					to={

							props.auth ? '/surveys' :
							'/'
					}
				>
					Emaily
				</Link>
				<ul className='right'>{renderContent(props)}</ul>
			</div>
		</nav>
	);
};

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Header);

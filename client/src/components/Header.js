import React from 'react';
import { connect } from 'react-redux';

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
			return (
				<li>
					<a>Logout</a>
				</li>
			);
	}
};

const Header = props => {
	return (
		<nav>
			<div className='nav-wrapper'>
				<a className='left brand-logo'>Emaily</a>
				<ul className='right'>{renderContent(props)}</ul>
			</div>
		</nav>
	);
};

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Header);

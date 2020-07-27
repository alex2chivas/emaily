import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
					<a href='/api/logout'>Logout</a>
				</li>
			);
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
					clLinkssName='left brand-logo'
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

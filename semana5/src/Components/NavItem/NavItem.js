import React from 'react';
import './NavItem.css';

export const NavItem = (props) => {
	return (
		<li className='nav-item'>
			<a href='#' className='icon-button' onClick={() => console.log('')}>
				{props.icon}
			</a>
			{props.children}
		</li>
	);
};

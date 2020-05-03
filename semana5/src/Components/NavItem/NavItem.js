import React from 'react';
import './NavItem.css';

export const NavItem = (props) => {
	return (
		<li className='nav-item'>
			<a
				href='#'
				className='icon-button'
				onClick={() => props.setOpen(!props.open)}
			>
				{props.icon}
			</a>
			{props.open && props.children}
		</li>
	);
};

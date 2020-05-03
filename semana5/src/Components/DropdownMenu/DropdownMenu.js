import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as CogIcon } from '../../assets/icons/cog.svg';
import './DropdownMenu.css';

export const DropdownMenu = (props) => {
	const [activeMenu, setActiveMenu] = useState('main');
	const [menuHeight, setMenuHeight] = useState(null);
	const dropdownRef = useRef(null);
	useEffect(() => {
		setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
	}, []);

	const calHeight = (el) => {
		const height = el.offsetHeight;
		setMenuHeight(height);
	};

	const DropdownItem = (props) => {
		return (
			<a
				href='#'
				className='menu-item'
				onClick={() => console.log('DropdownItem')}
			>
				<span className='icon-button'>{props.leftIcon}</span>
				{props.children}
				<span className='icon-right'>{props.righIcon}</span>
			</a>
		);
	};

	return (
		<div
			className='dropdown'
			style={{ height: menuHeight }}
			ref={dropdownRef}
		>
			<div className='menu'>
				<DropdownItem leftIcon={<UserIcon />}>Mi Perfil</DropdownItem>
				<DropdownItem leftIcon={<CogIcon />}>
					Configuración
				</DropdownItem>
			</div>
		</div>
	);
};

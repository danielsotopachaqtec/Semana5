import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as CogIcon } from '../../assets/icons/cog.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../assets/icons/bolt.svg';
import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
import './DropdownMenu.css';
import { CSSTransition } from 'react-transition-group';

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
				onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
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
			<CSSTransition
				in={activeMenu === 'main'}
				timeout={500}
				classNames='menu-primary'
				unmountOnExit
				onEnter={calHeight}
			>
				<div className='menu'>
					<DropdownItem leftIcon={<UserIcon />}>
						Mi Perfil
					</DropdownItem>
					<DropdownItem leftIcon={<CogIcon />} goToMenu='settings'>
						Configuración
					</DropdownItem>
				</div>
			</CSSTransition>
			<CSSTransition
				in={activeMenu === 'settings'}
				timeout={500}
				classNames='menu-secondary'
				unmountOnExit
				onEnter={calHeight}
			>
				<div className='menu'>
					<DropdownItem goToMenu='main' leftIcon={<ArrowIcon />}>
						<h3>Configuración</h3>
					</DropdownItem>
					<DropdownItem leftIcon={<BellIcon />}>
						<span className='menu-name'>Notificaciones</span>
					</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>
						<span className='menu-name'>Seguridad</span>
					</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>
						<span className='menu-name'>Suscripciones</span>
					</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
};

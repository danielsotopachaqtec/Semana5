import React, { Component, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { ReactComponent as BellIcon } from './assets/icons/bell.svg';
import { ReactComponent as PlusIcon } from './assets/icons/plus.svg';
import { ReactComponent as CaretIcon } from './assets/icons/caret.svg';
import Loading from './assets/icons/loading.gif';
import { Welcome } from './Components/Welcome/Welcome';
import PostList from './Components/PostList/PostList';
import { Modal } from './Components/Modal/Modal';
import Posts from './Components/Posts/Posts';
import PostOftheMonthProvider from './Components/Provider/PostOftheMonthProvider';
import { Navbar } from './Components/Navbar/Navbar';
import { NavItem } from './Components/NavItem/NavItem';
import { DropdownMenu } from './Components/DropdownMenu/DropdownMenu';
const App = (props) => {
	const [open, setOpen] = useState(false);
	return (
		<div className='App'>
			<Navbar>
				<NavItem icon={<PlusIcon />} />
				<NavItem icon={<BellIcon />} />
				<NavItem open={open} setOpen={setOpen} icon={<CaretIcon />}>
					<DropdownMenu />
				</NavItem>
			</Navbar>
		</div>
	);
};

export default App;

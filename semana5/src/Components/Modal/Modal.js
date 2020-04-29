import React, { Component } from 'react';
import { Backdrop } from '../Backdrop/Backdrop';
import './Modal.css';

export const Modal = (props) => {
	return (
		<>
			<Backdrop visible={props.visible} clicked={props.closeModal} />
			<div
				className='modal'
				style={{
					transform: props.visible
						? 'translateY(0)'
						: 'translateY(-100vh)',
					opacity: props.visible ? 1 : 0,
				}}
			>
				{props.children}
			</div>
		</>
	);
};

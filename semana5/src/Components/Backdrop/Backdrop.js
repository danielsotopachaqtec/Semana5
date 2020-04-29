import React, { Component } from 'react';
import './Backdrop.css';

export const Backdrop = (props) => {
	return props.visible ? (
		<div className='backdrop' onClick={props.clicked}></div>
	) : null;
};

import './Component.css';
import React from 'react';

class Hello extends React.Component {
	render() {
		return (
			<div className="Component-wrapper">
				<h1> Hello Vancouver </h1>
			</div>
		);
			
	}
}

module.exports = Hello;
'use strict'
import React from 'react';
import Hello from './modules/Component.jsx';
import Feed from './Feed.js'
import './main.css';



class App extends React.Component {
	constructor() {
		this.state = { currentComponent: Feed };
	}
	openProfile() {
		/*
		What is the array on the first argument?
		If you try to lazy load a chunk that 
		depends on an other lazy loaded chunk you 
		can set it as a dependency in the array. 
		*/
		require.ensure(['./FunnyButton.js'], () => {
			var Profile = require('.Profile.js');
			this.setState({
				currentComponent: Profile;
			});
		});
	}
	render() {
		return (
			return <div>{this.state.currentComponent()}</div>
		);
	}
}
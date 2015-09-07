'use strict'
import React from 'react';
import Hello from './modules/Component.jsx';
import './main.css';


main();

function main() {
	React.render (<Hello />, document.getElementById('app'));
}

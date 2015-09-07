/*
The code written in this file may not be guranteed
to run since this part of the tutorial covers some high level concepts. 
*/

'use strict'
import React from 'react';
import RootComponent from './modules/Component.jsx';

import './main.css';

main();
var rootInstance = React.render(RootComponent(), document.body);

function main() {
	// When you render it, assign it to a variable
	return;
}

// Then just copy and paste this part at the bottom of
// the file
if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
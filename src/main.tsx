import React from 'react';
import ReactDOM from 'react-dom';

import Toast from './lib/Toast';
import App from	'./lib/App';
import PubSub from './utils/PubSub';

const toastInstance = new Toast();
toastInstance.setActive(true); // toggle option - container is initially false we need to make it true

var console = (function(oldConsole):any{
	return({
		...oldConsole,
		log: function(...message: any[]): void{
			oldConsole.log(...message);
			PubSub.publish('CONSOLE', {type: 'LOG', args: message});
		},
		info: function(...message: any[]): void{
			oldConsole.info(...message);
		},
		warn: function(...message: any[]): void{
			oldConsole.warn(...message);
		},
		error: function(...message: any[]): void{
			oldConsole.error(...message);
		},
		myLog: function(...message: any[]): void{
			oldConsole.log(...message);
		}
	})
}(window.console));
window.console = console;

ReactDOM.render(<App pubsub={PubSub}/>, window.document.querySelector('#extInject'));

// const toastInstance = new Toast();
// toastInstance.setActive(true); // toggle option - container is initially false we need to make it true
// const id = toastInstance.create({ type: 'log' }); // called inside the override log
// console.log(toastInstance.getAllToasts()); // for calculation if required
// toastInstance.destroy(id); // if someone presses x button to remove the toast
// toastInstance.setActive(false); // toggle option - if someone wants to stop recording the instances
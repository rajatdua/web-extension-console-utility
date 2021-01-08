import Toast from './lib/Toast';
import { PubSub } from '../utils/PubSub'

const toastInstance = new Toast();
toastInstance.setActive(true); // toggle option - container is initially false we need to make it true

var console = (function(oldConsole):any{
	return({
		...oldConsole,
		log: function(...message: any[]): void{
			PubSub.publish('CONSOLE', {type: 'LOG', args: message})
			oldConsole.log('Pepela: ', ...message);
		},
		// info: function(...message: any[]): void{
		// 	oldConsole.info(...message);
		// },
		warn: function(...message: any[]): void{
			oldConsole.warn(...message);
		},
		error: function(...message: any[]): void{
			oldConsole.error(...message);
		}
	})
}(window.console));
window.console = console;

// const toastInstance = new Toast();
// toastInstance.setActive(true); // toggle option - container is initially false we need to make it true
// const id = toastInstance.create({ type: 'log' }); // called inside the override log
// console.log(toastInstance.getAllToasts()); // for calculation if required
// toastInstance.destroy(id); // if someone presses x button to remove the toast
// toastInstance.setActive(false); // toggle option - if someone wants to stop recording the instances

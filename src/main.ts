// (function () {
//   var log = console.log;
//   console.log = function () {
//     log.call(this, 'My Console!!!', ...arguments);
//   };
// }());

import Toast from './lib/Toast';

const toastInstance = new Toast();
toastInstance.setActive(true); // toggle option - container is initially false we need to make it true
const id = toastInstance.create({ type: 'log' }); // called inside the override log
console.log(toastInstance.getAllToasts()); // for calculation if required
toastInstance.destroy(id); // if someone presses x button to remove the toast
toastInstance.setActive(false); // toggle option - if someone wants to stop recording the instances

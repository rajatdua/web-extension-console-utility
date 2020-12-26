import { printLine } from './modules/print';

console.log('Content script works!');
printLine("Using the 'printLine' function from the Print Module");
(function () {
  var log = console.log;
  console.log = function () {
    log.call(this, 'My Console!!!', ...arguments);
  };
}());
navigator.serviceWorker.register('../sw/serviceWorker.js').then(x=>console.log('done', x));

printLine("End!");

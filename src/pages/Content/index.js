import { printLine } from './modules/print';

console.log('Content script works!');
printLine("Using the 'printLine' function from the Print Module");

const s = document.createElement('script');
s.src = chrome.runtime.getURL('main.bundle.js');
s.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);


printLine("End!");

import React from 'react';
import ReactDOM from 'react-dom';

function Injected(props){
	render(
		<div>UwU</div>
	)
} 

window.onload = ()=>{
	let container = document.createElement('div');
	container.setAttribute("id", "extInject");
	container.style.position = "absolute";
	window.document.body.appendChild(container)

	console.log(window.document.querySelector('#extInject'))
	ReactDOM.render(<div>UwU</div>, window.document.querySelector('#extInject'));
}

console.log('Content script works!');
printLine("Using the 'printLine' function from the Print Module");

const s = document.createElement('script');
s.src = chrome.runtime.getURL('main.bundle.js');
s.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);


printLine("End!");

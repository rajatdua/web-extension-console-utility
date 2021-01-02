import React from 'react';
import ReactDOM from 'react-dom';

function Injected(){
	return <div>UwU</div>
}

window.onload = () => {
	let container = document.createElement('div');
	container.setAttribute("id", "extInject");
	container.style.position = "absolute";
	window.document.body.appendChild(container);
	ReactDOM.render(<Injected/>, window.document.querySelector('#extInject'));
};

const s = document.createElement('script');
s.src = chrome.runtime.getURL('main.bundle.js');
s.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);


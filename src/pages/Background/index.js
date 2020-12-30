import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');
console.log({ window });

chrome.webRequest.onCompleted.addListener(details => console.log({ details }));
navigator.serviceWorker.register('./serviceWorker.js').then(x=>console.log('done', x));

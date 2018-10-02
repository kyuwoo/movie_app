import React from 'react'; // UI library
import ReactDOM from 'react-dom'; // react(UI library)를 웹에 출력(render)함 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// reactDom은 1개의 컴포넌트를 출력하고
// 그 다큐먼트 안에 엘리먼트가 있는데, 엘리먼트 ID는 root야
// 이건 index.html 파일에 있다.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

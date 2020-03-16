import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './TodoList';

//下面这个 就是 帮助我们借助网页，来写app应用的作用
// 实际上，是一个增加网页缓存
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Todolist />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

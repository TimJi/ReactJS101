import React from 'react';
import ReactDOM from 'react-dom';

// 使用 arrow function 來設計 Functional Component 讓 UI 設計更單純（f(D) => UI），減少副作用（side effect）
const App = () => (
  <div>
    <h1>Hello, World! by Tim2.0</h1>
  </div>
);

// 將 <App /> 元件插入 id 為 app 的 DOM 元素中
ReactDOM.render(<App />, document.getElementById('app'));

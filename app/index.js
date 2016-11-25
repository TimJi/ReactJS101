import React from 'react';
import ReactDOM from 'react-dom';

// const 為常數
const lists = ['JavaScript', 'Java', 'Node', 'Python'];

class HelloMessage extends React.Component {
  render() {
    return (
    <ul>
      {lists.map((result, index) => {
        return (<li key={index}>{result}</li>);
      })}
    </ul>);
  }
}

// 將 <MyComponent /> 元件插入 id 為 app 的 DOM 元素中
ReactDOM.render(<HelloMessage />, document.getElementById('app'));

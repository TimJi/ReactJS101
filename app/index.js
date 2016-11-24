import React from 'react';
import ReactDOM from 'react-dom';

//  注意元件開頭第一個字母都要大寫
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, World! by Tim2.0</h1>
      </div>
    );
  }
}
// 將 <App /> 元件插入 id 為 app 的 DOM 元素中
ReactDOM.render(<App />, document.getElementById('app'));

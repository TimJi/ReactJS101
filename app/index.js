import React from 'react';
import ReactDOM from 'react-dom';

//  注意元件開頭第一個字母都要大寫
class MyComponent extends React.Component {
    // render 是 Class based 元件唯一必須的方法（method）
    render() {
        return (
            <div>
              <h1>Hello, World! by {this.props.name}</h1>
            </div>
        );
    }
}

// PropTypes 驗證，若傳入的 props type 不符合將會顯示錯誤
MyComponent.propTypes = {
  name: React.PropTypes.string,
}

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值
MyComponent.defaultProps = {
 name: 'Tim2.0',
}

// 將 <MyComponent /> 元件插入 id 為 app 的 DOM 元素中
ReactDOM.render(<MyComponent name = 'Tim2.1'/>, document.getElementById('app'));

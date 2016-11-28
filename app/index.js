import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    // 若是需要綁定 this.方法或是需要在 constructor 使用 props，定義 state，就需要 constructor。若是在其他方法（如 render）使用 this.props 則不用一定要定義 constructor
    constructor(props) {
        // 對於 OOP 物件導向程式設計熟悉的讀者應該對於 constructor 建構子的使用不陌生，事實上它是 ES6 的語法糖，骨子裡還是 prototype based 物件導向程式語言。透過 extends 可以繼承 React.Component 父類別。super 方法可以呼叫繼承父類別的建構子
        super(props);
        this.state = {}
    }
    // render 是唯一必須的方法，但如果是單純 render UI 建議使用 Functional Component 寫法，效能較佳且較簡潔
    render() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
}

// PropTypes 驗證，若傳入的 props type 不是 string 將會顯示錯誤
HelloMessage.propTypes = {
  name: React.PropTypes.string,
}

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值 Zuck
HelloMessage.defaultProps = {
 name: 'Zuck',
}

ReactDOM.render(<HelloMessage name="Mark" />, document.getElementById('app'));

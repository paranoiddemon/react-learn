
/* Webstorm 快捷键
* rsc 生成函数组件 stateless
* rsi 生成带props的组件
* rcc 生成类组件 react class component
*
*
* */
import React, {Component} from 'react';
import User from "./Components/User"
class App extends Component {
    render() {
        // 组件标签 属性名={属性值} 属性值可以是任意js对象 字面量 函数
        return (
            <div className="app">
                React APP
                <User user={{name: "jerry", age: 20}} fn={() => 1}/>

            </div>);
    }
}

export default App;
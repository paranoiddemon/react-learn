import React from "react";


/*
* 事件
* 1. 事件的属性使用驼峰命名
*   onclick -> onClick
*   onchange -> onChange
* 属性值不能直接执行代码语句，而是需要一个回调函数
*   onclick="alert(1)"
*   onClick={() =>{alert(1);}}
*   传入的必须是函数而不是函数调用 不能加括号
*   在React中无法通过return false取消默认行为。
*
* 2. 事件对象 event
*   - React事件中会传递事件对象。可以在响应函数中定义参数来接收事件对象
*   - 不同于原生event。是React包装后的event
*   - 由于对象进行过包装，使用过程中无需考虑兼容性问题
* 3. 事件冒泡
*   - 一个子元素和祖先元素。子元素被点击，祖先元素有相同事件，子元素的事件触发，会向上传播
*   - 可以取消冒泡
* */
const App = () => {
    function clickFn(){
        alert("click");
    }
    // 传入event对象
    const clickHandler = (event) => {
        // 取消默认行为 默认行为: 比如点击a标签会跳转到超链接。
        event.preventDefault();
        // 取消事件的传播
        event.stopPropagation();
        alert("world");
    };
    return <div>
        App Component
        <button onClick={() => alert("hello")}> click </button>
        <button onClick={clickHandler}> click </button>
        <button onClick={clickFn}> click </button>
        <a href="https://baidu.com" onClick={clickHandler}>hyperlink</a>
    </div>
}


// 导出
export default App;


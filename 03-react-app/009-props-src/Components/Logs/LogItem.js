import React from 'react';
import CustomDate from "./CustomDate"; // 导入组件
import "./LogItem.css";  // 导入CSS


/*
* 父组件可以通过props像子组件传递数据 如在Log组件中 <LogItem test="123" ></LogItem>
* 子组件LogItem 可以从函数参数中获取props对象。包含了父组件传递的所有参数。传递的参数可以是任意类型。函数也可以
* 在js中函数是一等公民，要有意识函数和string是平级的。
*
* props是只读的。是父组件传递给子组件
*
* */
const LogItem = (props) => {
    //console.log(props); // {test: "123"}  可以直接获取到
    //console.log(props.date);

    return (
    <div className="item">
        <CustomDate date={props.date}></CustomDate>
        <div className="content">
            <h2 className="desc">{props.desc}</h2>
            <div className="time">{props.time}</div>
        </div>
    </div>
    );
};

// 导出组件。不能加括号。导出的函数，加括号就成调用返回的是函数返回值
export default LogItem;
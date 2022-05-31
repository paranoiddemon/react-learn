import React from "react";
import {useState} from "react";


/*
* State
* 需要在变量变化后。重新render组件
* 1. State是存储属性的方式。属于当前组件，其他组件无法访问
* 2. State是可变的
*
* State是注册在React中的一个变量。React会监测。当state变化的时候，会自动触发组件的重新render
*
* 在函数组建中，需要通过钩子函数hook，获取state
* 1. import {useState} from "react";
* 2. 使用useState()来创建, 传入state的初始值作为参数
* 3. 返回一个数组。
*   第一个元素是传入的初始值，只是用来显示数据。不会影响组件重新渲染
*   第二个元素是函数 setXxx。调用其修改state才会让组件重新渲染。调用set函数去操作初始值，会被React监控，React会重新渲染。
*
* 注意：
* 1. 只有State值变化的时候才会重新渲染
* 2. 如果state的初始值为对象。
*   如果在set中传入新的对象，会创建新的对象替代旧的对象。
*   如果修改了对象的属性，但是对象还是指向同一个对象，还是认为state没有改变
* 3. 当通过setState修改state时，并不是修改当前的state值，修改的是组件下一次渲染的state
* 4. setState() 触发的render是异步的。会加入一个队列中。会用旧state的值的情况，可能出现计算的错误。拿到的旧值不是最新的
* 可以通过传递回调函数的形式来修改state来避免。
*
* */

// 函数组件
const App = () => {
    const result = useState(1);
    let [counter, setCounter] = result;
    // let counter = 10;
    // let setCounter = result[1];

    const result1 = useState({name: "tom", age: 19});
    let [user, setUser] = result1;

    const addHandler = () => {
        //setCounter(counter + 1);
        // React会将最新的state值作为参数传递给回调函数。并保证其是最新的值
        setCounter((pre) =>{
            return pre + 1;
        })

        // let newUser = Object.assign({}, user);
        // newUser.name = "jerry";
        // setUser(newUser);

        // 等效的浅复制写法。展开，修改name属性
        setUser({...user, name: "jerry"});
    }

    const subtractHandler = () => {
        setCounter(counter - 1);
    }

    // 组件一加载的时候值就生效了。所以counter不会重新渲染了。
    return <div>
        <h1>{counter}</h1>
        <h2>{user.name}</h2>
        <button onClick={addHandler}>+</button>
        <button onClick={subtractHandler}>-</button>
    </div>
}


// 导出
export default App;


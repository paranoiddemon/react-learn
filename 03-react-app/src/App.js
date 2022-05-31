import React, {useRef} from "react";
/*
* 获取原生dom对象
* 1. 传统的document API
* 2. 直接从React中获取
*   1. 创建dom对象的容器 useRef() hook
*       - 只能用于函数组件或自定义hook。类组件不能使用
*       - 只能直接在函数组件中调用。component函数主体中。不能嵌套或者在外层。
*   2.  <h1 id="header" ref={h1Ref}>world</h1> 在元素标签中指定容器。写在哪就能获取dom元素
*   3. 返回一个{current: undefined}对象。所以也可以直接创建一个相同的对象。代替useRef()。但是每次重新渲染都会创建这个对象。
*   React返回的就是同一个对象。
*
* */
const App = () => {
    // 创建容器。返回一个object
    const h1Ref = useRef();


    const clickHandler = () => {
        const header = document.getElementById("header");
        header.innerHTML = "hello";
        console.log(h1Ref.current === header); // true 获取到的是同一个
    }

    return <div>
        <h1 id="header" ref={h1Ref}>world</h1>
        <button onClick={clickHandler}>+</button>
        <button>-</button>
    </div>;
}


// 导出
export default App;


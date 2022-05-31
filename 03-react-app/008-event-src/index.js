/*
* 组件
* 1. 函数式组件 推荐使用
*   - 返回JSX的函数
*   - 组件的首字母必须大写
*   - 每一个组件都是单独的js文件
* 2. 类组件
*
* */

import ReactDOM from "react-dom/client";
import App from "./App"; // ./必须要加
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById("root"));

// 渲染组件
root.render(<App/>);
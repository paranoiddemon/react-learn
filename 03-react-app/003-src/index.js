// js的入口

import ReactDOM from 'react-dom/client'; // 浏览器渲染client vs 服务端渲染
import './index.css' // 需要以./开头

// React元素
const App =
    /*日志容器*/
<div className="logs">
    <h1>React App</h1>
    <p>Get Started</p>
    {/*日志项*/}
    <div className="item">
        <div className="date">
            <div className="month">二月{}</div>
            <div className="day">1{}</div>
        </div>
        <div className="content">
            <h2 className="desc">学习react{}</h2>
            <div className="time">60min{}</div>
        </div>
    </div>
</div>

// 根元素
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App);
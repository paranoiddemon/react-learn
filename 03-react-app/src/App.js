import React from "react";
import Logs from "./Components/Logs/Logs";
import LogForm from "./Components/LogForm/LogForm";
import "./App.css";



// 函数组件
const App = () => {
    return <div className={"app"}>App Component
        <LogForm/>
        <Logs/>
    </div>
}


// 导出
export default App;


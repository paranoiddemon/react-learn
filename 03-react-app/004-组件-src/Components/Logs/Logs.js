/* 日志项的容器*/

import LogItem from "./LogItem";
import "./Logs.css"

const Logs = () =>{
    return <div className="logs">
        <LogItem></LogItem>
        <LogItem></LogItem>
        <LogItem></LogItem>
    </div>
}

export default Logs
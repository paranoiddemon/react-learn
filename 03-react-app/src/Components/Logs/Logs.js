/* 日志项的容器*/
import LogItem from "./LogItem";
import "./Logs.css"
import Card from "../UI/Card/Card";

const Logs = () =>{
    return <Card className="logs">
        <LogItem></LogItem>
        <LogItem></LogItem>
        <LogItem></LogItem>
    </Card>
}

export default Logs
/* 日志项的容器*/
import LogItem from "./LogItem";
import "./Logs.css"
import Card from "../UI/Card/Card";

const Logs = (props) =>{
    const logsData = props.logsData;
    /* 展开
    * ...obj   会得到kv { name: 'tom', age: 10, gender: 'male' } 所以不需要额外的属性名
    * */

    {/* onDelLog是App中传入的删除数据的函数。闭包。传给logItem的是一个函数。直接调用就可以删除*/}
    const logItems = logsData
        .map((item, index) => <LogItem key={index}
                                       onDelLog={() => props.onDelLog(index)}
                                       {...item}/>);
    // console.log(logItems);

    return <Card className="logs">
        {/* 为空显示p标签*/}
        {logItems.length !== 0 ? logItems : <p> NO DATA!</p>}
    </Card>
}

export default Logs
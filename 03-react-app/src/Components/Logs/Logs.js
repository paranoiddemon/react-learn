/* 日志项的容器*/
import LogItem from "./LogItem";
import "./Logs.css"
import Card from "../UI/Card/Card";
import LogFilter from "../LogFilter/LogFilter";
import {useState} from "react";

const Logs = (props) =>{
    // 过滤数据
    const [year, setYear] = useState(2022);

    let filteredData = props.logsData.filter(item => item.date.getFullYear() === year);

    /* 可能还有其他逻辑。 尽量不要直接传递setState*/
    const changeYearHandler = (year) => {
        setYear(year);
    }

    const logsData = filteredData;
    /* 展开
    * ...obj   会得到kv { name: 'tom', age: 10, gender: 'male' } 所以不需要额外的属性名
    * */

    {/* onDelLog是App中传入的删除数据的函数。闭包。传给logItem的是一个函数。直接调用就可以删除*/}
    const logItems = logsData
        .map((item, index) => <LogItem key={index}
                                       onDelLog={() => props.onDelLog(item.id)}
                                       {...item}/>);
    // console.log(logItems);

    return <Card className="logs">
        <LogFilter year={year} setYear={changeYearHandler}/>
        {/* 为空显示p标签*/}
        {logItems.length !== 0 ? logItems : <p> NO DATA!</p>}
    </Card>
}

export default Logs
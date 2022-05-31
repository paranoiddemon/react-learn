/* 日志项的容器*/

import LogItem from "./LogItem";
import "./Logs.css"

// http获取的数据
const data = [
    {
        id: 1,
        date: new Date(),
        desc: "学习",
        time: 601,
    }
];

const Logs = () =>{
    // 展开对象。作为属性传递给子组件的props
    // 数组设置key。对象的唯一key。
    return <div className="logs">
        {data.map(item => <LogItem key={item.id} {...item}/>)}
    </div>
}

export default Logs
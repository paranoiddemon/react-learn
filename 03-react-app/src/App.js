import React, {useState} from "react";
import Logs from "./Components/Logs/Logs";
import LogForm from "./Components/LogForm/LogForm";
import "./App.css";
import ConfirmModal from "./Components/UI/ConfirmModal/ConfirmModal";
import Backdrop from "./Components/UI/Backdrop/Backdrop";



// 函数组件
const App = () => {
    // 删除一条日志的函数
    const delLogByIndex = (index)  => {
         setLogsData(prevState => {
             const copy =  [...prevState];
             copy.splice(index, 1);
             return copy;
         })
    }

    // 根据ID删除
    const delLogById =(id) => {
        setLogsData(prevState => {
            const newLog = prevState.filter(item => item.id !== id);
            return newLog;
        })
    }

    const [logsData, setLogsData] = useState([
        {
            id: "001",
            date: new Date(2021,1,1),
            desc: "learn react",
            time: 100
        },
        {
            id: "002",
            date: new Date(2020,2,1),
            desc: "learn vue",
            time: 60
        },
        {
            id: "003",
            date: new Date(2022,3,1),
            desc: "learn ng",
            time: 90
        }
    ]);

    // newLog是子组件传递的参数。回调函数。子组件中调用父组件中的函数。传递参数
    const saveLogHandler = (newLog) => {
        console.log("APP ==>", newLog);
        // 需要一个ID作为列表的key
        newLog.id = Date.now() + "";
        // 数组中添加元素
        // 展开数组，加入新的log
        setLogsData([...logsData, newLog])
    }

    return <div className={"app"}>App Component
        {/*LogForm 新增的log  需要加入Logs的数组中。
            多个组件共用的数据。需要放入到共同的父组件中。方便数据的传递

            logForm不需要数据。而是需要把数据添加到数组中。
            所以应该把logForm中的数据传给父组件App。App加入到数组中。
        */}
        <LogForm onSaveLog={saveLogHandler} />
        <Logs logsData={logsData} onDelLog={delLogById}/>
    </div>
}


// 导出
export default App;


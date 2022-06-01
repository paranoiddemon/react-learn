import React, {useState} from 'react';
import CustomDate from "./CustomDate"; // 导入组件
import "./LogItem.css";
import Card from "../UI/Card/Card";
import ConfirmModal from "../UI/ConfirmModal/ConfirmModal";  // 导入CSS

const LogItem = (props) => {
    // 添加一个state记录是否显示确认窗口
    const [showConfirm, setShowConfirm] = useState(false);


    const deleteItemHandler = () => {
        // alert("delete");
        // 弹出确认框。浏览器的框
        // const isDel = window.confirm("Sure?");
        // if (isDel) {
        //     // 闭包。在子组件直接调用。不需要传入index
        //     props.onDelLog();
        //     // 删除当前的item。 从数据中移除指定的数据
        // }

        // 显示确认窗口
        setShowConfirm(true);
    };

    // 如果cancel设置为false
    const cancelHandler = () => {
        setShowConfirm(false);
    }

    const okHandler = () => {
        props.onDelLog();
        setShowConfirm(false);
    }

    // console.log(`logItem -----> ${props}`);
    return (
        <div className="item">
            {/* 当showConfirm 为true的时候显示modal*/}
            {showConfirm && <ConfirmModal confirmText={"Sure???"} onCancel={cancelHandler} onConfirm={okHandler}/>}

            <CustomDate date={props.date}/>
            <Card className="content">
                <div className="time">{props.time}</div>
                <h2 className="desc">{props.desc}</h2>
            </Card>

            {/* 删除按钮*/}
            <div className={"delete"} onClick={deleteItemHandler}>x</div>
        </div>
    );
};

// 导出组件。不能加括号。导出的函数，加括号就成调用返回的是函数返回值
export default LogItem;
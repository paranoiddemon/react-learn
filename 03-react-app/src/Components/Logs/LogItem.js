import React from 'react';
import CustomDate from "./CustomDate"; // 导入组件
import "./LogItem.css";
import Card from "../UI/Card/Card";  // 导入CSS

const LogItem = () => {
    return (
    <div className="item">
        <CustomDate></CustomDate>
        <Card className="content">
            <h2 className="desc">学习react{}</h2>
            <div className="time">60min{}</div>
        </Card>
    </div>
    );
};

// 导出组件。不能加括号。导出的函数，加括号就成调用返回的是函数返回值
export default LogItem;
import React from 'react';
import "./Backdrop.css"
import ReactDOM from "react-dom";  // 不是react-dom/client

/* 遮罩层*/
// 获取Backdrop根元素
const backdropRoot = document.getElementById("backdrop-root");
const Backdrop = (props) => {
    return  ReactDOM.createPortal(
        <div className={"backdrop"}>
            {/* 需要把BackDrop内部的元素展示出来。*/}
            {props.children}
        </div>, backdropRoot
    )
};

export default Backdrop;
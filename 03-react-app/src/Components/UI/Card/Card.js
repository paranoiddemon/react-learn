import React from 'react';
import "./Card.css"

// 把子组件的的className加入当前组件，把标签体的内容展示 props.children获取标签体内容
const Card = (props) => {
    return (
    <div className={`card ${props.className}`}> {props.children} </div>
)};

export default Card;
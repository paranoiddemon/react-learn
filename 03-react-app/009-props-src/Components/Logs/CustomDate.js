import React from 'react';
import "./CustomDate.css";

const CustomDate = (props) => {
    console.log(props);
    console.log("date: " + props.date);
    console.log(props.date.getMonth());
    return (
        <div className="date">
            <div className="month">{props.date.getMonth() + 1}</div>
            <div className="day">{props.date.getDate()}</div>
        </div>
    );
};

export default CustomDate;
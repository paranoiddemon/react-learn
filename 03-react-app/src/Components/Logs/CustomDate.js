import React from 'react';
import "./CustomDate.css";

const CustomDate = (props) => {
    // console.log(props);
    return (
        <div className="date">
            <div className="month">{props.date.getMonth() + 1}</div>
            <div className="day">{props.date.getDate()}</div>
        </div>
    );
};

export default CustomDate;
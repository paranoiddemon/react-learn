import React from 'react';

const LogFilter = (props) => {

    // 监听select的change
    const yearChangeHandler = (e) =>{
        props.setYear(+e.target.value); // +转成数字
    }

    return (
        <div>
            Year:<select value={props.year} onChange={yearChangeHandler}>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
        </select>
        </div>
    );
};

export default LogFilter;
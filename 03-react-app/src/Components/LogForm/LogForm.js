import React from 'react';
import Card from "../UI/Card/Card";
import "./LogForm.css"; // css样式需要引入才能生效

const LogForm = () => {
    return (
        <Card className={"logForm"}>
            <form>
                <div className={"form-item"}>
                    <label htmlFor={"date"}>date</label>
                    <input id={"date"} type={"date"}/>
                </div>
                <div className={"form-item"}>
                    <label htmlFor={"desc"}>desc</label>
                    <input id={"desc"} type={"text"}/>
                </div>
                <div className={"form-item"}>
                    <label htmlFor={"time"}>time</label>
                    <input id={"time"} type={"text"}/>
                </div>
                <button className={"form-btn"}>Save</button>
            </form>

        </Card>
    );
};

export default LogForm;
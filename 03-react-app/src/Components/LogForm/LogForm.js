import React, {useState} from 'react';
import Card from "../UI/Card/Card";
import "./LogForm.css"; // css样式需要引入才能生效

const LogForm = (props) => {

    //let inputDate, inputDesc, inputTime
    // 使用state来管理变量。因为修改state会触发组件的重新渲染。因此可以设置
    // const[inputDate, setInputDate] = useState("");
    // const[inputDesc, setInputDesc] = useState("");
    // const[inputTime, setInputTime] = useState("");

    // 使用一个state传入一个对象 来存放表单输入
    const [formData, setFormData] = useState({
        inputDate: "",
        inputDesc: "",
        inputTime: ""
    });

    /* 当表单项发生变化的时候，获取用户输入的内容。监听表单项发生的变化，创建响应函数*/
    // e是event对象。当事件触发的时候，会被传给响应函数
    const descChangeHandler = (e) => {
        // event.target 返回的是触发事件的对象 dom对象  dom.value就能获取dom对象的值
        // console.log(e.target.value);
        // setInputDesc(e.target.value);
        setFormData({
            ...formData,
            inputDesc: e.target.value
        })
    }

    const dateChangeHandler = (e) => {
        // setInputDate(e.target.value);
        setFormData({
            ...formData,
            inputDate: e.target.value
        })
    }

    const timeChangeHandler = (e) => {
        //console.log(e.target.value);
        // setInputTime(e.target.value);
        setFormData({
            ...formData,
            inputTime: e.target.value
        })
    }
    /*
     表单提交的时候。汇总数据
     dom中提交表单会导致网页的跳转
     在react中表单通常不需要自行提交。而是通过react提交

     提交表达后如何清空表单的数据？
     表单因为其输入是外部控制，在React中是非受控组件

     双向绑定：
     数据使用state。将state作为表单项的value。
     - onChange响应函数 state会随表单项变化
     - 表单项value会随state变化而变化

     这样表单就成了受控组件
     */
    // 绑定在form的onsubmit不是button
    const formSubmitHandler = (e) => {
        // 取消form的默认行为。就不会跳转
        e.preventDefault();

        // 创建对象获取到表单输入值
        // const newLog = {
        //     date: new Date(inputDate),
        //     desc: inputDesc,
        //     time: inputTime
        // }
        const newLog = {
            date: new Date(formData.inputDate),
            desc: formData.inputDesc,
            time: formData.inputTime
        }
        // 从父组件传递一个函数到props中，在事件触发的时候作为参数传给这个函数。
        // 在App中就能读取到这个数据
        props.onSaveLog(newLog);
        //console.log(e.target.value);
        //console.log(newLog);

        // 提交表单会出发清空表单项。清空state会出发重新渲染。
        // setInputTime("");
        // setInputDesc("");
        // setInputDate("");
        setFormData({
            inputDate: "",
            inputDesc: "",
            inputTime: ""
        })
    }

    return (
        <Card className={"logForm"}>
            <form onSubmit={formSubmitHandler} >
                <div className={"form-item"}>
                    <label htmlFor={"date"}>Birthday</label>
                    {/*每次修改input会修改state, 并且元素的value等于这个state*/}
                    <input value={formData.inputDate} onChange={dateChangeHandler} id={"date"} type={"date"}/>
                </div>
                <div className={"form-item"}>
                    <label htmlFor={"desc"}>Breed</label>
                    <input value={formData.inputDesc} onChange={descChangeHandler} id={"desc"} type={"text"}/>
                </div>
                <div className={"form-item"}>
                    <label htmlFor={"time"}>Gender</label>
                    <input value={formData.inputTime} onChange={timeChangeHandler} id={"time"} type={"text"}/>
                </div>
                <button className={"form-btn"}>Save</button>
            </form>

        </Card>
    );
};

export default LogForm;
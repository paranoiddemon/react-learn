
import style from "./App.module.css"; // 需要一个名字
import React,{Fragment} from "react";


/*
* CSS module
* 1. 创建xxx.module.css
* 2. 在组件中引入css import classes from "*.module.css"; // 需要一个名字
* 3. 通过classes来设置className <p className={style.p1}>

*
* CSS模块可以动态设置唯一的className "App_p1__VEZLL"
*
* 在多个组件都可以使用相同的className。比如都在css中使用p1
* */
const App = () => {

    /*
    * React.Fragment会返回子元素。作为根容器，但是不需要多余的根容器的dom
    * 1. import React,{Fragment} from "react";
    *     Fragment组件
    * 2. 直接使用空标签<> </>
    * 3. 但是在Fragment上设置的属性都是无效的。因为root根本不会渲染在dom中。
    *
    * */
  return (
    <Fragment className={style.app}>
      React App
       {/* <p className={style.p1}>paragraph</p>
        <button>button</button>*/}
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Fragment>
  );
}

export default App;

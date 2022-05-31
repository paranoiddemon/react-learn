import React, {Component} from 'react';
/*
* 类组件的props是存在类的实例对象中。
* 通过this.props访问
*
* 类组件中的所有state。都是存在实例的state对象中
* this.state
* this.setState()修改。 修改state的时候，只会修改设置了的属性。
* 其他属性的不变。仅限于直接存储于state中的属性。如果嵌套的对象，则不行
*
* 获取DOM元素
* 1. 创建一个属性，作为dom的容器
* 2. 在标签中指定ref属性 ref={this.divRef}
*
*
*
* 因为有react hooks的存在。函数组件也能保存状态。因此更推荐使用function components
*
* 函数组件中，响应函数直接以函数形式定义在函数组件中。
* 类组件中，以类的方法存在。不用再声明变量const
*
* */
class User extends Component {
    // 类中声明属性不需要let const 直接写变量名
    divRef = React.createRef();
    clickHandler = () => {
        // setState对象
        // this.setState({count:this.state.count + 1});
        // 异步 也可以传入函数。 整体传入一个函数替代原来的state
        this.setState(pre => {
            console.log(this.divRef.current);
            return {
                count: pre.count + 1
            }
        });
    }
    state = {
        count: 0,
    };

    render() {
        console.log(this.props)
        return (
            <div ref={this.divRef}>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickHandler}>click</button>
                <ul>
                    <li>{this.props.user.name}</li>
                    <li>{this.props.user.age}</li>
                </ul>
            </div>

        );
    }
}

export default User;
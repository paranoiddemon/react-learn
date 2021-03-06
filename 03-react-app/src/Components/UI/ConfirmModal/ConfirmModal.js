import "./ConfirmModal.css";
import Card from "../Card/Card";
import Backdrop from "../Backdrop/Backdrop";

const ConfirmModal = (props) => {
    return <Backdrop>
        <Card className={"confirmModal"}>
            <div className={"confirmText"}>
                {/* 使用modal的组件传入*/}
                <p>{props.confirmText}</p>
            </div>
            <div className={"confirmBtn"}>
                <button onClick={props.onConfirm} className={"okBtn"}>confirm</button>
                {/* 从调用的组件传入一个cancel函数 设置state为false 隐藏弹窗*/}
                <button onClick={props.onCancel} className={"noBtn"}>cancel</button>
            </div>
        </Card>
    </Backdrop>
}

export default ConfirmModal;
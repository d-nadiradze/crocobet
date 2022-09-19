import React, {useState} from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import {CloseIcon} from "../svg";

const Modal = (props) => {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(true)

    const closeModal = () => {
        setAnimate(false)
        setTimeout( () => {
            navigate('/')
        },300)

    }

    return ReactDOM.createPortal(
        <div className={`${animate ? 'animate-appear' : 'animate-dissepear'} w-screen h-screen fixed flex justify-center items-center top-0 left-0 z-50`}>
            <div className={'w-screen h-screen bg-[#707070] bg-opacity-70 absolute top-0 left-0 z-10 flex justify-center items-center '} onClick={closeModal}>
            </div>
            <div className="animate-slide bg-white rounded-xl p-[32px] z-50 min-w-[400px]">
                <div className="flex items-center justify-between mb-[26px]">
                    <div className="">
                        <div className="">
                            {props.title}
                        </div>
                        { props.text &&
                            <div className="text-xs font-light opacity-60">
                                {props.text}
                            </div>
                        }
                    </div>
                    <div className="cursor-pointer border border-gray-200 rounded-full p-[12px]" onClick={closeModal}>
                        <img src="../images/close.svg" alt=""/>
                    </div>
                </div>
                {props.children}
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;

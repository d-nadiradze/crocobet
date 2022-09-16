import React, {useState} from 'react';
import Modal from "./Modal";
import UserInfoAndPicture from "../UserInfoAndPicture";
import InputSwitch from "../InputSwitch";
import {Input} from "postcss";
import Button from "../Button";


const EditUserModal = () => {
    const [blockAction, setBlockAction] = useState(false)

    const blockUser = (e, id) => {
        setBlockAction(!e)
    }

    return (
        <Modal title={'User setup'} text={'information and settings'}>
            <div className="border border-gray-200 rounded-xl p-[16px]">
                <UserInfoAndPicture/>
                <div className="flex justify-between mt-[17px]">
                    <div className="ml-1">Details</div>
                    <div className="flex items-center space-x-2">
                        <div className={'text-xs'}>The user is Active</div>
                        <div className="mt-1">
                            <InputSwitch onChange={(e) => blockUser(e, 1, 'feedback')}
                                         checked={true}
                                         className={true ? 'bg-customBlue' : 'bg-gray-300'}/>
                        </div>
                    </div>
                </div>
                <Input type={'text'} name={'name'} src={'./images/profilePic.svg'} placeholder={'Full name'}/>
                <Input type={'email'} name={'email'} src={'./images/email.svg'} placeholder={'E-Mail'}/>
                <Input type={'text'} name={'role'} src={'./images/key.svg'} placeholder={'Role'}/>
                <Button className={'text-white bg-customBlue'}>Save changes</Button>
            </div>
        </Modal>
    );
};

export default EditUserModal;

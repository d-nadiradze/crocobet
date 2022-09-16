import React from 'react';
import Modal from "./Modal";
import {Input} from "postcss";

const addUserModal = () => {

    return (
        <Modal title={'Invite New User'} text={'Fill in all the fields'}>
            <div className="">
                <Input type={'text'} name={'name'} src={'./images/profilePic.svg'} placeholder={'Full name'}/>
                <Input type={'email'} name={'email'} src={'./images/email.svg'} placeholder={'E-Mail'}/>
                <Input type={'text'} name={'role'} src={'./images/key.svg'} placeholder={'Role'}/>
            </div>
        </Modal>
    );
};

export default addUserModal;

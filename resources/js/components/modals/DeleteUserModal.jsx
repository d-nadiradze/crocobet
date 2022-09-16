import React from 'react';
import Modal from "./Modal";
import Input from "../Input";
import Button from "../Button";

const DeleteUserModal = () => {
    return (
        <Modal title={'Delete user'}>
            <Input type={'text'} name={'name'} src={'./images/profilePic.svg'} placeholder={'Full name'}/>
            <Button className={'bg-red-500 text-white'}>Delete</Button>
        </Modal>
    );
};

export default DeleteUserModal;

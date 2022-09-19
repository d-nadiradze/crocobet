import React, {useContext, useEffect, useState} from 'react';
import Modal from "./Modal";
import Button from "../Button";
import {useParams} from "react-router-dom";
import Input from "../Input";
import {UserContext} from "../../Contexts/UserContext";
import {useForm} from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteUserModal = () => {
    const params = useParams();
    const [users, setUsers, loadUsers, setLoadUsers, message , setMessage] = useContext(UserContext);
    const [user,setUser] = useState({});
    const { register, handleSubmit, reset ,formState: { errors } } = useForm({mode: "onBlur"});
    const [roles,setRoles] = useState({});
    const navigate = useNavigate()

    const onSubmit = (data) => {
        if (window.confirm('Are you sure you wish to delete this user?')){
            axios.delete('/api/user/delete/' + params.id)
                .then(function (response) {
                    console.log(response);
                    setLoadUsers(!loadUsers)
                    setMessage(response.data.success)
                    navigate('/')
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    const getCurrentUser = () => {
        if (users){
            setUser(users.find((element) => {
                return ( element.id == params.id);
            }))
            reset(user);
        }
    }

    useEffect(() => {
        getCurrentUser()
    },[users, user])

    return (
        <Modal title={'Delete user'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative">
                    <Input type={'text'} name={'name'} src={'../images/profilePic.svg'}
                           placeholder={'Full name'} value={user?.name} register={register} disabled={true}
                           validation={{required: {value:true, message: 'This field is required'}}} error={errors?.name ?? false}
                    />
                    <div className={`absolute top-[50%] translate-y-[-50%] right-4 ${user?.status === "ACTIVE" ? 'text-customBlue' : 'text-red-500' } text-sm`}>
                        {user?.status}
                    </div>
                </div>
                <Button className={'bg-red-500 text-white'}>Delete</Button>
            </form>
        </Modal>
    );
};

export default DeleteUserModal;

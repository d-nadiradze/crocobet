import React, {useContext, useEffect, useState} from 'react';
import Modal from "./Modal";
import Input from "../Input";
import Button from "../Button";
import Select from "react-select";
import axios from "axios";
import {UserContext} from "../../Contexts/UserContext";
import {useForm} from "react-hook-form";
import CustomSelect from "../CustomSelect";

const addUserModal = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [users, setUsers, loadUsers, setLoadUsers, message , setMessage] = useContext(UserContext);
    const { register, handleSubmit, reset ,formState: { errors } } = useForm({mode: "onBlur"});
    const [roles,setRoles] = useState({});

    const onSubmit = (data) => {
        axios.post('/api/user/add/', {
            name: data.name,
            email: data.email,
            role: selectedOption.value,
        })
            .then(function (response) {
                console.log(response);
                setLoadUsers(!loadUsers)
                setMessage(response.data.success)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getAllRoles = () => {
        axios.get('/api/roles')
            .then((res) => {
                setRoles(res.data.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getAllRoles();
    },[])

    return (
        <Modal title={'Invite New User'} text={'Fill in all the fields'}>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input type={'text'} name={'name'} src={'../images/profilePic.svg'}
                           placeholder={'Full name'} register={register}
                           validation={{required: {value:true, message: 'This field is required'}}} error={errors?.name ?? false}
                    />
                    <Input type={'email'} name={'email'} src={'../images/email.svg'}
                           placeholder={'E-Mail'}  register={register}
                           validation={{required: {value:true, message: 'This field is required'}}} error={errors?.email ?? false}
                    />
                    <CustomSelect
                        className="mt-4 rounded-xl"
                        options={roles}
                        onChange={setSelectedOption}
                        isSearchable={false}
                        isClearable={true}
                    />
                    <Button className={'bg-customBlue text-white'}>Send invitation</Button>
                </form>
            </div>
        </Modal>
    );
};

export default addUserModal;

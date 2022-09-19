import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import Modal from "./Modal";
import UserInfoAndPicture from "../UserInfoAndPicture";
import InputSwitch from "../InputSwitch";
import Button from "../Button";
import Input from "../Input";
import {UserContext} from "../../Contexts/UserContext";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import Select from "react-select";

const customStyles = {
    control: (styles, { isFocused }) => {
        return {
            ...styles,
            border: isFocused ? "1px solid #12193B" : "1px solid #E7E8EB",
            backgroundColor: 'white',
            boxShadow: 'none',
            "&:hover": {
                border: '1px solid #12193B'
            },
            padding: '5px',
            borderRadius: '12px'
        }
    },
    option: (styles, {  isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isFocused ? '#FFE9F1' : 'transparent',
            color: isFocused ? '#FF2D78' : '#888C9D',
            padding: '15px 0',
            textAlign: 'center',
        };
    },
}

const EditUserModal = () => {
    const params = useParams()
    const [users, setUsers, loadUsers, setLoadUsers] = useContext(UserContext);
    const [user,setUser] = useState({});
    const [roles,setRoles] = useState({});
    const [userStatus, setUserStatus] = useState("")
    const [selectedOption, setSelectedOption] = useState(null);
    const { register, handleSubmit, reset ,formState: { errors } } = useForm({mode: "onBlur"});

    const onSubmit = (data) => {
        axios.post('/api/user/edit/' + params.id, {
            name: data.name,
            email: data.email,
            status: userStatus,
            role: selectedOption.value,
        })
            .then(function (response) {
                console.log(response);
                setLoadUsers(!loadUsers)
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

    const getCurrentUser = () => {
        if (users){
            setUser(users.find((element) => {
                return ( element.id == params.id);
            }))
            reset(user);
            setUserStatus(user.status)
        }
    }

    useEffect(()=>{
        getCurrentUser();
        getAllRoles();
    }, [users, user])


    return (
        <Modal title={'User setup'} text={'information and settings'} open={true}>
            <div className="border border-gray-200 rounded-xl p-[16px] ">
                <UserInfoAndPicture name={user?.name} email={user?.email} blocked={userStatus !== "BLOCKED" ?? false}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between mt-[17px]">
                    <div className={`${userStatus === "BLOCKED" ? 'text-gray-300' : ''} ml-1`}>Details</div>
                    <div className="flex items-center space-x-2">
                        <div className={`text-xs ${userStatus === "BLOCKED" ? 'text-gray-300' : ''}`}>The user is <span className={'lowercase'}>{userStatus}</span></div>
                        <div className="mt-1">
                            <InputSwitch onChange={ () => setUserStatus(userStatus === "BLOCKED" ? "ACTIVE" : "BLOCKED")}
                                         checked={ userStatus !== "BLOCKED" ?? false }
                                         className={ userStatus !== "BLOCKED" ?? false ? 'bg-customBlue' : 'bg-gray-300'}/>
                            <input type={'hidden'} name={'status'} src={''} defaultValue={userStatus} {...register('status')}/>
                        </div>
                    </div>
                </div>
                    <Input type={'text'} name={'name'} src={'../images/profilePic.svg'}
                           placeholder={'Full name'} value={user?.name} register={register} disabled={userStatus === "BLOCKED" ?? false}
                           validation={{required: {value:true, message: 'This field is required'}}} error={errors?.name ?? false}
                    />
                    <Input type={'email'} name={'email'} src={'../images/email.svg'}
                           placeholder={'E-Mail'} value={user?.email} register={register} disabled={userStatus === "BLOCKED" ?? false}
                           validation={{required: {value:true, message: 'This field is required'}}} error={errors?.email ?? false}
                    />
                    <Select
                        className="mt-4"
                        styles={customStyles}
                        options={roles}
                        onChange={setSelectedOption}
                        isSearchable={false}
                        isClearable={true}
                        />
                    <Button className={'text-white bg-customBlue'} disabled={userStatus === "BLOCKED" ?? false}>Save changes</Button>
                </form>
            </div>
        </Modal>
    );
};

export default EditUserModal;

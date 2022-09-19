import React, {useContext, useEffect, useState} from 'react';
import Header from "../components/HomePage/Header";
import Table from "../components/HomePage/Table";
import {useLocation, Outlet} from "react-router-dom";
import {UserContext} from "../Contexts/UserContext";

const Home = () => {
    let location = useLocation();
    const [filteredUsers, setFilteredUsers] = useState({})
    const [active, setActive] = useState(false)
    const [users, setUsers, loadUsers, setLoadUsers, message , setMessage] = useContext(UserContext);

    const closeFlashMessage = () => {
        setActive(false)
        setTimeout(() => {
            setMessage('')
        }, 2000)
    }

    useEffect(() => {
        if (message) {
            setActive(true)

            setTimeout(() => {
                closeFlashMessage()
            }, 5000)
        }
    }, [message])

    return (
        <div className={'w-screen'}>
            {
                message &&
                <div className={(active ? 'active' : '') + ' flash-message'}>
                    <div className="max-w-xs bg-[#4BCF80] text-sm text-white rounded-md shadow-lg  mb-3 ml-3"
                         role="alert">
                        <div className="flex items-center space-x-4 p-4">
                            <div className="">
                                {message}
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Header setFilteredUsers={setFilteredUsers} filteredUsers={filteredUsers}/>
            <Table location={location} filteredUsers={filteredUsers}/>
            <Outlet/>
        </div>
    );
};

export default Home;


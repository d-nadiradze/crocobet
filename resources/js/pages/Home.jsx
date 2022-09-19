import React, {useState} from 'react';
import Header from "../components/HomePage/Header";
import Table from "../components/HomePage/Table";
import {useLocation, Outlet} from "react-router-dom";

const Home = () => {
    let location = useLocation();
    const [filteredUsers, setFilteredUsers] = useState({})

    return (
        <div className={'w-screen'}>
            <Header setFilteredUsers={setFilteredUsers}/>
            <Table location={location} filteredUsers={filteredUsers}/>
            <Outlet/>
        </div>
    );
};

export default Home;


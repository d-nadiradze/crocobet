import React from 'react';
import Header from "../components/HomePage/Header";
import Table from "../components/HomePage/Table";
import {useLocation, Outlet, Link} from "react-router-dom";

const Home = () => {
    let location = useLocation();

    return (
        <div className={'w-screen'}>
            <Header/>
            <Table location={location}/>
            <Outlet />
        </div>
    );
};

export default Home;


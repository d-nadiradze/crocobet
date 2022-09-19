import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import {UserContext} from "../../Contexts/UserContext";
import {createSearchParams, useSearchParams} from "react-router-dom";

const Header = ({setFilteredUsers,filteredUsers}) => {
    const [users, setUsers, loadUsers, setLoadUsers, message , setMessage] = useContext(UserContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchResult = searchParams.get("search");
    const ref = useRef();

    const searchUsers = () => {
        setSearchParams(createSearchParams({search: ref.current.value}))

        if (users && ref.current.value && ref.current.value.length !== 0) {
                setFilteredUsers(users.filter((user) => {
                    return Object.values(user)
                        .join(" ")
                        .toLowerCase()
                        .includes(ref.current.value.toLowerCase())
                }))
            filteredUsers?.length <= 0  ? setMessage('No results') : ''
        } else if (ref.current.value && ref.current.value.length === 0) {
            setFilteredUsers({})
        }

    }

    useEffect(() => {
        if(searchResult){
            ref.current.value = searchResult
                searchUsers()
        }

    }, [searchParams,users])

    return (
        <div className="flex justify-between max-w-[1160px] mx-auto mt-[60px] items-center px-[20px]">
            <div className="text-4xl font-[600]">
                Users
            </div>
            <div className={"relative my-4 min-w-[250px]"}>
                <div className="absolute top-[50%] translate-y-[-50%] left-4">
                    <img className={'w-full'} src={'../images/search.svg'} alt=""/>
                </div>
                <input
                    className={'w-full font-light text-sm border border-gray-200 pl-[40px] pr-[10px] py-[10px] rounded-xl placeholder:text-sm placeholder:font-light duration-300 focus:border-[#374047] focus:ring-1 focus:outline-none focus:border-blue-400'}
                    type={'text'} name={'search'} placeholder={'Type to filter the table...'} ref={ref}
                    onChange={(e) => searchUsers(e)} autoFocus={true}
                />
            </div>
        </div>
    );
};

export default Header;

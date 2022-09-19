import {createContext, useEffect, useState} from 'react';
import axios from "axios";

const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [users, setUsers] = useState(null);
    const [roles, setRoles] = useState(null);
    const [loadUsers, setLoadUsers] = useState(true)
    const [message ,setMessage] = useState('')


    useEffect(() => {
        const fetchUser = () => {
            axios.get(`/api/user`)
                .then((res) => {
                    setUsers(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        const fetchRoles = () => {
            axios.get('/api/roles')
                .then((res) => {
                    setRoles(res.data.data)
                })
                .catch((err) => console.log(err))
        }

        fetchUser()
        fetchRoles()
    }, [loadUsers]);

    return (
        // the Provider gives access to the context to its children
        <UserContext.Provider value={[users, setUsers, loadUsers, setLoadUsers, message, setMessage, roles]} >
            {children}
        </UserContext.Provider>
    );
}

export {UserContext, UserContextProvider};

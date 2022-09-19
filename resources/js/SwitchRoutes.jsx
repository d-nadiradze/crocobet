import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import EditUserModal from "./components/modals/EditUserModal";
import AddUserModal from "./components/modals/addUserModal";
import DeleteUserModal from "./components/modals/DeleteUserModal";

const SwitchRoutes = () => {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <div className="App">
            <Routes location={background || location}>
                <Route path="/" element={<Home />}>
                    <Route path="edit/:id" element={<EditUserModal />} />
                    <Route path="add" element={<AddUserModal />} />
                    <Route path="delete/:id" element={<DeleteUserModal />} />
                </Route>
            </Routes>

            {background && (
                <Routes>
                    <Route path="edit/:id" element={<EditUserModal />} />
                    <Route path="add" element={<AddUserModal />} />
                    <Route path="delete/:id" element={<DeleteUserModal />} />
                </Routes>
            )}

        </div>
    );
};

export default SwitchRoutes;

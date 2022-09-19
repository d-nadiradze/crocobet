import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,} from "react-router-dom";
import SwitchRoutes from "./SwitchRoutes";
import {UserContextProvider} from "./Contexts/UserContext";

function App() {

    return (
        <React.StrictMode>
            <Router>
                <UserContextProvider>
                    <SwitchRoutes/>
                </UserContextProvider>
            </Router>
        </React.StrictMode>

    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,} from "react-router-dom";
import SwitchRoutes from "./SwitchRoutes";

function App() {

    return (
        <Router>
            <SwitchRoutes/>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

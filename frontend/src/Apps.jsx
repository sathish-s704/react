import React from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import User from "./User.jsx";
import Createuser from "./Createuser.jsx";
import Updateuser from "./Updateuser.jsx";
import './App.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/create" element={<Createuser />} />
                <Route path="/update/:id" element={<Updateuser />} />
            </Routes>
        </Router>
    );
}
 
export default App;
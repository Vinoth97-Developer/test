import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Collage from "../Collage/Collage";
import Form from "../Collage/Form";
import Header from "./Header";
// import Parent from "../Child-Parent/Parent";
// import Student from "../Collage/Student";
// import Counter from "../Counter/Counter";
// import Admin from "./Admin";
// import Agent from "./Agent";
// import Customer from "./Customer";


function Main() {
    return ( 
        <Router>
            <Header/>
            <Routes>
                {/* <Route path="/customer" element={<Customer />} />
                <Route path="/agent" element={<Agent/>}/>
                <Route path="/admin" element={<Admin />}/>
                <Route path="/counter" element={<Counter />}/>
                <Route path="/parent" element={<Parent />}/>
                <Route path="/student" element={<Student />}/> */}
                <Route path="/form" element={<Form/>}/>
                <Route path="/collage" element={<Collage/>}/>
            </Routes>
        </Router>
     );
}

export default Main;
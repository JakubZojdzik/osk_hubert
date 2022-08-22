import React from "react";
import { Categories, Navbar } from "./components";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <div className="container">
                <Categories></Categories>
            </div>
        </div>
    );
}
    
export default App;

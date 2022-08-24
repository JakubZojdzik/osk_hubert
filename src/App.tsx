import React from "react";
import { Banner, Categories, Navbar } from "./components";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="container">
                <Categories></Categories>
            </div>
        </div>
    );
}
    
export default App;

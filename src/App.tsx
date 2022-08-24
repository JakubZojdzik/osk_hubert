import React from "react";
import { Banner, Categories, Contact, Instructions, Navbar } from "./components";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Categories />
            <Instructions />
            <Contact />
        </div>
    );
}
    
export default App;

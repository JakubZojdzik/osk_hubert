import React from "react";
import { Banner, Categories, Contact, Footer, Instructions, Navbar } from "./components";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Categories />
            <Instructions />
            <Contact />
            <Footer />
        </div>
    );
}
    
export default App;

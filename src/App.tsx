import React from "react";
import { Banner, Blob, Categories, Contact, Footer, Instructions, Navbar } from "./components";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Blob />
            <Categories />
            <Instructions />
            <Contact />
            <Footer />
        </div>
    );
}
    
export default App;

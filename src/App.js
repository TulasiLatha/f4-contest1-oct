import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TypingBox from "./Components/TypingBox";


const App=()=>{
    return(
        <div className="App">
            <Header />
            <TypingBox/>
            <Footer />
        </div>
    )
}
export default App;
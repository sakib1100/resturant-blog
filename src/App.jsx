import React from "react";
import { Route, Routes } from 'react-router-dom';

// page
import HomePage from "./pages/HomePage";

// compenent
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* content depend route */}
      <Routes>
        <Route path={"/"} element={<HomePage/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

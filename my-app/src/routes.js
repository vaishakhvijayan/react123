import React from "react";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./layout";
function Routes1 (){
    return(
        <BrowserRouter>
        <Layout/>
        <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
        </Routes>
        </BrowserRouter>   
    )
}
export default Routes1;
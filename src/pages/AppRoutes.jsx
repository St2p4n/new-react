import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import About from "./About/About"
import Idk from "./G/G"
import GRa from "./H/H"

export default function AppRoutes() {
    return(
        <>
           <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
             </Routes>
           </BrowserRouter>
        </>
    )
}
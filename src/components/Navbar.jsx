import React from "react"
import { NavLink } from "react-router-dom"
import Home from "../pages/Home"
import Profil from "../pages/Profil"
import Reglage from "../pages/Reglage"
import Communaute from "../pages/Communaute"
import Logo from "./Logo"

const Navbar = () => {
    return (
        <div className="header">
            <Logo />
            <div className="navbar">
                <ul>
                    <NavLink to="/" element={<Home />}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to={"/profil"} element={<Profil />}>
                        <li>Profil</li>
                    </NavLink>
                    <NavLink to="/reglage" element={<Reglage />}>
                        <li>Réglages</li>
                    </NavLink>
                    <NavLink to="/communaute" element={<Communaute />}>
                        <li>Communauté</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

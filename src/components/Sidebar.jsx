import React from "react"
import { Link } from "react-router-dom"
import yoga from "../assets/iconYoga.png"
import natation from "../assets/iconNatation.png"
import velo from "../assets/iconVelo.png"
import musculation from "../assets/iconMusculation.png"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <div className="sidebar__buttons">
                    <Link to="/#">
                        <img src={yoga} alt="logo yoga" />
                    </Link>
                    <Link to="/#">
                        <img src={natation} alt="logo natation" />
                    </Link>
                    <Link to="/#">
                        <img src={velo} alt="logo velo" />
                    </Link>
                    <Link to="/#">
                        <img src={musculation} alt="logo musculation" />
                    </Link>
                </div>
                <div className="sidebar__copiryght-container">
                    <p className="sidebar__copiryght-text">
                        Copiryght, SportSee 2020
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

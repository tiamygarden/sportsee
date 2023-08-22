import React from "react"
import NavBar from "../components/NavBar"
import Sidebar from "../components/Sidebar"
import imgFemme from "../assets/avatarfemme.png"
import imgHomme from "../assets/avatarhomme.png"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <NavBar />
            <Sidebar />
            <div className="main__container">
                <h1 className="title is-1">Choisissez un profil</h1>
                <div className="full-height">
                    <div className="avatars__container">
                        <Link to="/profil/user/18">
                            <div className="center">
                                <img
                                    className="avatar"
                                    src={imgFemme}
                                    alt="icone femme"
                                />
                                <p>Cecilia</p>
                            </div>
                        </Link>
                        <Link to="/profil/user/12">
                            <div className="center">
                                <img
                                    className="avatar"
                                    src={imgHomme}
                                    alt="icone homme"
                                />
                                <p>Karl</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

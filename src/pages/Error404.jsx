import React from "react"
import NavBar from "../components/NavBar"
import Sidebar from "../components/Sidebar"

const Error404 = () => {
    return (
        <>
            <NavBar />
            <Sidebar />
            <div className="main__container">
                <h1>Erreur 404</h1>
            </div>
        </>
    )
}

export default Error404

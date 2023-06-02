import React from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Error404 = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="main__container">
                <h1>Erreur 404</h1>
            </div>
        </>
    )
}

export default Error404

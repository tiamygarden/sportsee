import React from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Main from "../components/Main"
import { useParams } from "react-router-dom"

const Profil = () => {
    const { name } = useParams()

    return (
        <>
            <Navbar />
            <Sidebar />
            <Main />
            <p className={"main__container-btm"}>profile de {name}</p>
        </>
    )
}

export default Profil

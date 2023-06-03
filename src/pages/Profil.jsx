import React from "react"
import NavBar from "../components/NavBar"
import Sidebar from "../components/Sidebar"
import Main from "../components/Main"
import { useParams } from "react-router-dom"

const Profil = () => {
    const { name } = useParams()

    return (
        <>
            <NavBar />
            <Sidebar />
            <Main />
            <p className={"main__container-btm"}>profile de {name}</p>
        </>
    )
}

export default Profil

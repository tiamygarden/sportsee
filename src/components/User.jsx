import React, { useEffect, useState } from "react"
import { fetchData } from "../services/api"
import axios from "axios"

function User() {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get("http://localhost:4200/user/12").then((res) => {
            setData(res.data.data)
        })
    }, [])
    // useEffect(() => {
    //     fetchData(12, "main-data") // Appel à fetchData pour récupérer les données principales de l'utilisateur
    //         .then((data) => setData(data))
    //         .catch((error) => console.error("Error fetching data:", error))
    // }, [])

    return (
        <div className="main__container-user">
            <p>
                Bonjour{" "}
                <span style={{ color: "red", fontSize: "48px" }}>
                    {data.userInfos ? data.userInfos.firstName : "Chargement"}
                </span>{" "}
                !
            </p>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default User

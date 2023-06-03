import React, { useEffect, useState } from "react"
import { USER_MAIN_DATA } from "../data/dataMocked"
// import { getUser } from "../services/api"

function User() {
    //A commenter pour utiliser les datas Mockées------------------------------
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const userDatas = await getUser(12)
    //             setData(userDatas.data)
    //         } catch (error) {
    //             console.error(
    //                 "Erreur lors de la récupération des données utilisateur",
    //                 error
    //             )
    //         }
    //     }
    //     fetchData()
    // }, [])
    // ---------------------------------------------------------fin à commenter

    return (
        // datas Mockées------------------------------------------------------
        <div className="main__container-user">
            <p>
                Bonjour{" "}
                <span style={{ color: "red", fontSize: "48px" }}>
                    {USER_MAIN_DATA
                        ? USER_MAIN_DATA[0].userInfos.firstName
                        : "Chargement"}
                </span>{" "}
                !
            </p>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        // ---------------------------------------------------fin datas Mockées

        // datas récupérées via l'API------------------------------------------
        // <div className="main__container-user">
        //     <p>
        //         Bonjour{" "}
        //         <span style={{ color: "red", fontSize: "48px" }}>
        //             {data.userInfos ? data.userInfos.firstName : "Chargement"}
        //         </span>{" "}
        //         !
        //     </p>
        //     <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        // </div>
        // ---------------------------------------fin datas récupérées via l'API
    )
}

export default User

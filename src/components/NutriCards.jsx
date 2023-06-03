import React, { useEffect, useState } from "react"
// import { USER_MAIN_DATA } from "../data/dataMocked"
import { getNutritionData } from "../services/api"
// import NutritionData from "../model/NutritionData"
import calIcon from "../assets/calories-icon.png"
import proteinIcon from "../assets/protein-icon.png"
import carbIcon from "../assets/carbs-icon.png"
import fatIcon from "../assets/fat-icon.png"

const NutriCards = () => {
    // datas Mockées------------------------------------------------------
    // const nutritionData = USER_MAIN_DATA[0].keyData
    //
    // const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    //     nutritionData
    ///---------------------------------------------------fin datas Mockées
    // datas récupérées via l'API------------------------------------------
    // A commenter pour utiliser les datas Mockées------------------------------
    const [nutritionData, setNutritionData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getNutritionData(12)
                setNutritionData(res) // Mettez à jour les données nutritionnelles dans l'état local
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données nutricards utilisateur",
                    error
                )
            }
        }

        fetchData()
    }, [])

    // const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = data
    //
    // const datasCard = [
    //     calorieCount,
    //     proteinCount,
    //     carbohydrateCount,
    //     lipidCount,
    // ]
    //ne pas commenter
    const icons = [calIcon, proteinIcon, carbIcon, fatIcon]
    // ---------------------------------------fin datas récupérées via l'API
    // ---------------------------------------------------------fin à commenter
    return (
        // datas Mockées------------------------------------------------------
        // <>
        //     {Object.entries(nutritionData).map(([key, value], index) => (
        //         <div className="nutricards" key={index}>
        //             <img
        //                 className="nutricards__icon"
        //                 src={icons[index]}
        //                 alt="icon"
        //             />
        //             <div className="nutricards__infos">
        //                 <h6>
        //                     {value + (key === "calorieCount" ? "kCal" : "g")}
        //                 </h6>
        //                 <p>
        //                     {key === "calorieCount"
        //                         ? "Calories"
        //                         : key === "proteinCount"
        //                         ? "Protéines"
        //                         : key === "carbohydrateCount"
        //                         ? "Glucides"
        //                         : "Lipides"}
        //                 </p>
        //             </div>
        //         </div>
        //     ))}
        // </>
        // ---------------------------------------------------fin datas Mockées
        /*datas récupérées via l'API-----------------------------------------*/
        <>
            {nutritionData &&
                Object.entries(nutritionData).map(([key, value], index) => (
                    <div className="nutricards" key={index}>
                        <img
                            className="nutricards__icon"
                            src={icons[index]}
                            alt="icon"
                        />
                        <div className="nutricards__infos">
                            <h6>
                                {value +
                                    (key === "calorieCount" ? "kCal" : "g")}
                            </h6>
                            <p>
                                {key === "calorieCount"
                                    ? "Calories"
                                    : key === "proteinCount"
                                    ? "Protéines"
                                    : key === "carbohydrateCount"
                                    ? "Glucides"
                                    : "Lipides"}
                            </p>
                        </div>
                    </div>
                ))}
        </>
        // ------------------------------fin datas récupérées via l'API
    )
}

export default NutriCards

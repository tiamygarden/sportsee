import React, { useEffect, useState } from "react"
import axios from "axios"
import calIcon from "../assets/calories-icon.png"
import proteinIcon from "../assets/protein-icon.png"
import carbIcon from "../assets/carbs-icon.png"
import fatIcon from "../assets/fat-icon.png"

const NutriCards = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get("http://localhost:4200/user/12").then((res) => {
            setData(res.data.data.keyData)
        })
    }, [])

    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = data

    const datasCard = [
        calorieCount,
        proteinCount,
        carbohydrateCount,
        lipidCount,
    ]

    const icons = [calIcon, proteinIcon, carbIcon, fatIcon]

    return (
        <>
            {datasCard.map((performancesData, index) => (
                <div className={"nutricards"} key={index}>
                    <img
                        className={"nutricards__icon"}
                        src={icons[datasCard.indexOf(performancesData)]}
                        alt="icon"
                    />
                    <div className={"nutricards__infos"}>
                        <h6>
                            {performancesData +
                                (datasCard.indexOf(performancesData) === 0
                                    ? "kCal"
                                    : "g")}
                        </h6>
                        <p>
                            {datasCard.indexOf(performancesData) === 0
                                ? " Calories"
                                : datasCard.indexOf(performancesData) === 1
                                ? "Protéines"
                                : datasCard.indexOf(performancesData) === 2
                                ? "Glucides"
                                : "Lipides"}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default NutriCards

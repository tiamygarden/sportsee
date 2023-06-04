import React from "react"
//a commenter pour utiliser l'API------------------------------------
import { USER_MAIN_DATA } from "../data/dataMocked"
//-------------------------------fin a commenter pour utiliser l'API
//a décommenter pour utiliser l'API------------------------------------
// import { getUser } from "../services/api"
// import { useEffect, useState } from "react"
//------------------------------------fin a décommenter pour utiliser l'API
import {
    ResponsiveContainer,
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
} from "recharts"

const PieChartComponent = () => {
    //datas mockées----------------------
    const todayScoreFormated = USER_MAIN_DATA
        ? USER_MAIN_DATA[0].todayScore * 100
        : 0
    //------------------------------------fin datas mockées

    //a décommenter pour utiliser l'API------------------------------------
    // const [data, setData] = useState(null)
    //
    // useEffect(() => {
    //     getUser(12)
    //         .then((res) => {
    //             setData(res.data)
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching data:", error)
    //         })
    // }, [])
    // if (!data) {
    //     return null // Si les données n'ont pas encore été récupérées, on affiche null (ou un indicateur de chargement par exemple)
    // }
    // const todayScoreFormated = data.todayScore * 100
    //------------------------------------fin a décommenter pour utiliser l'API

    return (
        <ResponsiveContainer width="100%" aspect={1}>
            <RadialBarChart
                width="100%"
                height="100%"
                //data mockée-------------------------------------------------
                data={[{ value: todayScoreFormated, fill: "#E60000" }]}
                //----------------------------------------------fin data mockée
                //a décommenter pour utiliser l'API---------------------------
                // data={[{ value: todayScoreFormated, fill: "#E60000" }]}
                //------------------------fin a décommenter pour utiliser l'API
                innerRadius={160}
                barSize={10}
                startAngle={90}
                endAngle={450}
                fill={"#E60000"}
                style={{ backgroundColor: "#FBFBFB", borderRadius: "5px" }}
            >
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar
                    //data mockée----------------------
                    dataKey={todayScoreFormated}
                    //------------------------------------fin data mockée
                    //data de l'api----------------------
                    // dataKey={todayScoreFormated}
                    //------------------------------------fin data de l'api
                    cornerRadius={5}
                    fill={"#E60000"}
                    background={{ fill: "#FBFBFB" }}
                />
                <circle
                    cx="50%"
                    cy="50%"
                    fill="white"
                    r="35%"
                    className="circle"
                ></circle>
                <text
                    x="50%"
                    y="45%"
                    textAnchor="middle"
                    fontSize="26"
                    fontWeight="700"
                    fill="black"
                >
                    {/*data mockée-------------------------------------------*/}
                    {todayScoreFormated}%
                    {/*//------------------------------------fin data mockée*/}
                    {/*a décommenter pour utiliser l'API---------------------*/}
                    {/*{todayScoreFormated}%*/}
                    {/*-----------------fin a décommenter pour utiliser l'API*/}
                </text>
                <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    fontSize="14"
                    fill="#74798C"
                    fontWeight="500"
                >
                    de votre objectif
                </text>
                <text x="10%" y="15%" fill="black" fontSize="14px">
                    Score
                </text>
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

export default PieChartComponent

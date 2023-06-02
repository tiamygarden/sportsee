import React, { useEffect, useState } from "react"
import axios from "axios"
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer,
} from "recharts"

const RadarChartComponent = () => {
    const dataKeys = {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity",
    }
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:4200/user/12/performance")
            .then((res) => {
                const responseData = res.data.data
                if (
                    responseData &&
                    responseData.userId === 12 &&
                    responseData.kind &&
                    responseData.data &&
                    Array.isArray(responseData.data)
                ) {
                    const updatedData = responseData.data.map((item) => ({
                        kind: dataKeys[item.kind],
                        value: item.value,
                    }))
                    setData(updatedData)
                } else {
                    console.error("Invalid data format:", responseData)
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
            })
    }, [])

    return (
        <ResponsiveContainer width="100%" aspect={1}>
            <RadarChart
                width="100%"
                height="100%"
                margin={{ top: 15, right: 30, bottom: 15, left: 30 }}
                style={{
                    backgroundColor: "#282D30",
                    borderRadius: "5px",
                }}
                data={data}
                outerRadius={"95%"}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tickLine={false}
                    axisLine={false}
                    dy={2}
                    dx={-3}
                    stroke="#FFF"
                    tick={{ fill: "#FFFFFF", fontSize: "10px" }}
                />
                <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
                <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.9} />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarChartComponent

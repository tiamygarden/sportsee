import React, { useEffect, useState } from "react"
import axios from "axios"
import {
    ResponsiveContainer,
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
} from "recharts"

const PieChartComponent = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get("http://localhost:4200/user/12")
            .then((res) => {
                setData(res.data.data)
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
            })
    }, [])

    if (data === null) {
        return <div>Loading...</div>
    }

    return (
        <ResponsiveContainer width="100%" aspect={1}>
            <RadialBarChart
                width="100%"
                height="100%"
                data={[{ value: data.todayScore * 100, fill: "#E60000" }]}
                innerRadius={160}
                barSize={10}
                startAngle={90}
                endAngle={450}
                fill={"#E60000"}
                style={{ backgroundColor: "#FBFBFB", borderRadius: "5px" }}
            >
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar
                    dataKey={data.todayScore * 100}
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
                    {data.todayScore * 100}%
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

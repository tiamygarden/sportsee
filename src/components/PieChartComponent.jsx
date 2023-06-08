import React from "react"
import {
    ResponsiveContainer,
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
} from "recharts"

const PieChartComponent = ({ user }) => {
    return (
        <ResponsiveContainer width="100%" aspect={1}>
            <RadialBarChart
                width="100%"
                height="100%"
                data={[{ value: user.score, fill: "#E60000" }]}
                innerRadius={160}
                barSize={10}
                startAngle={90}
                endAngle={-250}
                fill={"#E60000"}
                style={{ backgroundColor: "#FBFBFB", borderRadius: "5px" }}
            >
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar
                    dataKey="value"
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
                    {user.score}%
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

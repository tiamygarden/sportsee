import React from "react"
import PropTypes from "prop-types"
import {
    ResponsiveContainer,
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
} from "recharts"

const PieChartComponent = ({ user }) => {
    const scoreKey = user.todayScore !== undefined ? "todayScore" : "score"

    const scoreValue = user[scoreKey] * 100

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
                cx="50%"
                cy="50%"
                data={[{ value: scoreValue }]}
                innerRadius={78}
                outerRadius="80%"
                barSize={10}
                startAngle={90}
                endAngle={-359}
                fill={"#E60000"}
                style={{ backgroundColor: "#FBFBFB", borderRadius: "10" }}
            >
                <PolarAngleAxis
                    cx={0}
                    cy={0}
                    domain={[0, 100]}
                    type="number"
                    tick={false}
                />
                <RadialBar
                    minAngle={15}
                    // background={{ fill: "#FBFBFB" }}
                    clockWise
                    dataKey="value"
                    cornerRadius={51}
                    fill={"#E60000"}
                />
                <circle
                    cx="50%"
                    cy="50%"
                    fill="white"
                    r="72"
                    className="circle"
                ></circle>
                <text
                    x="50%"
                    y="45%"
                    textAnchor="middle"
                    fontSize={26}
                    fontWeight={700}
                    fill="black"
                >
                    {scoreValue}%
                </text>
                <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    fontSize={14}
                    fill="#74798C"
                    fontWeight={500}
                >
                    de votre objectif
                </text>
                <text x={14} y={20} fill="black" fontSize={14} fontWeight={800}>
                    Score
                </text>
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

PieChartComponent.propTypes = {
    user: PropTypes.shape({
        score: PropTypes.number,
    }),
}

export default PieChartComponent

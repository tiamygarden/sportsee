import React from "react"
import PropTypes from "prop-types"
import {
    ResponsiveContainer,
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
} from "recharts"
// import ChartWrapper from "./ChartWrapper"

const PieChartComponent = ({ user }) => {
    return (
        // <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
                data={[{ value: user.score * 100, fill: "#E60000" }]}
                innerRadius={78}
                barSize={10}
                startAngle={90}
                endAngle={-359}
                fill={"#E60000"}
                style={{ backgroundColor: "#FBFBFB", borderRadius: "10px" }}
            >
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar
                    dataKey="value"
                    cornerRadius={51}
                    fill={"#E60000"}
                    background={{ fill: "#FBFBFB" }}
                />
                <circle
                    cx="50%"
                    cy="50%"
                    fill="white"
                    r="72px"
                    className="circle"
                ></circle>
                <text
                    x="50%"
                    y="45%"
                    textAnchor="middle"
                    fontSize="26px"
                    fontWeight="700"
                    fill="black"
                >
                    {user.score * 100}%
                </text>
                <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    fontSize="14px"
                    fill="#74798C"
                    fontWeight="500"
                >
                    de votre objectif
                </text>
                <text
                    x="10%"
                    y="15%"
                    fill="black"
                    fontSize="14px"
                    fontWeight={"bold"}
                >
                    Score
                </text>
            </RadialBarChart>
        </ResponsiveContainer>
        // </ChartWrapper>
    )
}

PieChartComponent.propTypes = {
    user: PropTypes.shape({
        score: PropTypes.number,
    }),
}

export default PieChartComponent

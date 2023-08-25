import React from "react"
import PropTypes from "prop-types"
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer,
} from "recharts"
// import ChartWrapper from "./ChartWrapper"

const RadarChartComponent = ({ performance }) => {
    const convertKindToString = (kind) => {
        switch (kind) {
            case 1:
                return "Cardio"
            case 2:
                return "Energie"
            case 3:
                return "Endurance"
            case 4:
                return "Force"
            case 5:
                return "Vitesse"
            case 6:
                return "Intensité"
            default:
                return ""
        }
    }

    performance = performance.map((item) => {
        return {
            kind: convertKindToString(item.kind),
            value: item.value,
        }
    })

    return (
        // <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                style={{
                    backgroundColor: "#282D30",
                    borderRadius: "5px",
                }}
                data={performance}
                outerRadius={70}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tickLine={false}
                    axisLine={false}
                    dy={2}
                    stroke="#FFF"
                    tick={{ fill: "#FFFFFF", fontSize: "10px" }}
                />
                <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
                <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.9} />
            </RadarChart>
        </ResponsiveContainer>
        // </ChartWrapper>
    )
}

RadarChartComponent.propTypes = {
    performance: PropTypes.arrayOf(
        PropTypes.shape({
            kind: PropTypes.number.isRequired,
            value: PropTypes.number,
        })
    ),
}

export default RadarChartComponent

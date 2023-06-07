import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer,
} from "recharts"

const RadarChartComponent = ({ performance }) => {
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
                data={performance}
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

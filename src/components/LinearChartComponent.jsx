import React from "react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    CartesianAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts"
import ModelisationClass from "../model/ModelisationClass"

function LinearChartComponent({ avgSessions }) {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const session = payload[0].payload
            return (
                <div className="custom-tooltip-sessions">
                    <p>{`${session.sessionLength}min`}</p>
                </div>
            )
        }
        return null
    }

    let functionDay = new ModelisationClass()
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                style={{
                    backgroundColor: "#ff0000",
                    borderRadius: "5px",
                }}
                data={avgSessions}
                fontSize={10}
                margin={{
                    top: 15,
                    right: 10,
                    left: 10,
                    bottom: 5,
                }}
            >
                <defs>
                    <linearGradient
                        id="sessionGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop
                            offset="0%"
                            stopColor={"#FFFFFFa6"}
                            stopOpacity={0.6}
                        />
                        <stop
                            offset="100%"
                            stopColor={"#FFFFFF"}
                            stopOpacity={1}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid
                    vertical={false}
                    horizontal={false}
                    strokeDasharray="3 3"
                    axisLine={true}
                />
                <XAxis
                    dataKey="day"
                    tickFormatter={functionDay.Day}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#FFFFFFa6", fontSize: 10 }}
                />
                <YAxis axisLine={false} tickLine={false} hide={true} />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="url(#sessionGradient)"
                    strokeWidth={3}
                    circle
                    r={0}
                    fill={"#FFFFFF"}
                />

                <text
                    x={5}
                    y={17}
                    width={147}
                    dominantBaseline="left"
                    textAnchor="top"
                    fontSize="15px"
                    fontWeight="bold"
                    fill={"#FFFFFF"}
                    opacity={0.5}
                >
                    Durée moyenne des sessions
                </text>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LinearChartComponent

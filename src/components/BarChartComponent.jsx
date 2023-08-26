import React from "react"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    CartesianAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts"
import PropTypes from "prop-types"

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const session = payload[0].payload
        return (
            <div className="custom-tooltip">
                <p className="label">{`${session.kilogram}kg`}</p>
                <p className="label">{`${session.calories}kCal`}</p>
            </div>
        )
    }
    return null
}

const BarChartComponent = ({ activities }) => {
    return (
        <div className={"activity"}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width="100%"
                    height="100%"
                    data={activities}
                    fontSize={10}
                    barSize={10}
                    barGap={10}
                    margin={{
                        top: 32,
                        right: 0,
                        bottom: 15,
                        left: 32,
                    }}
                    style={{
                        backgroundColor: "#fbfbfb",
                        borderRadius: "5px",
                    }}
                >
                    <CartesianGrid vertical={false} strokeDasharray="2 3" />
                    <CartesianAxis axisLine={true} />
                    <XAxis
                        dataKey="day"
                        axisLine={{ stroke: "#DEDEDE" }}
                        tickLine={false}
                        height={48}
                        tickFormatter={(value) =>
                            new Date(value).getDate().toString()
                        }
                        tickMargin={15}
                    />
                    <YAxis
                        yAxisId="kilogram"
                        dataKey="kilogram"
                        type="number"
                        domain={["dataMin-2", "dataMax+1"]}
                        tickCount="3"
                        axisLine={false}
                        orientation="right"
                        tickLine={false}
                        tick={{ fontSize: "14px" }}
                        dx={15}
                    />
                    <YAxis
                        yAxisId="calories"
                        dataKey="calories"
                        type="number"
                        hide={true}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        width={300}
                        height={25}
                        verticalAlign={"top"}
                        align={"right"}
                        iconType={"circle"}
                        chartWidth={39}
                        chartHeight={63}
                        wrapperStyle={{
                            top: 0,
                            lineHeight: "24px",
                        }}
                    />
                    <text
                        x={3}
                        y={17}
                        dominantBaseline="left"
                        fontSize="1.5em"
                        fontWeight="bold"
                        fill="#020203"
                    >
                        Activité quotidienne
                    </text>
                    <Bar
                        yAxisId="kilogram"
                        name={"Poids (kg)"}
                        dataKey="kilogram"
                        fill="#282D30"
                        barSize={7}
                        radius={[50, 50, 0, 0]}
                    />
                    <Bar
                        yAxisId="calories"
                        name={"Calories brûlées (kCal)"}
                        dataKey="calories"
                        fill="#E60000"
                        barSize={7}
                        radius={[50, 50, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

BarChartComponent.propTypes = {
    activities: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string,
            kilogram: PropTypes.number,
            calories: PropTypes.number,
        })
    ).isRequired,
}

export default BarChartComponent

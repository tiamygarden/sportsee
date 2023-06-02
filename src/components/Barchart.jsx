import React, { useEffect, useState } from "react"
import { getUserData } from "../services/api"
import axios from "axios"
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

const Barchart = () => {
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

    const [data, setData] = useState({})

    useEffect(() => {
        axios
            .get("http://localhost:4200/user/12/activity")
            .then((res) => setData(res.data.data))
    }, [])

    return (
        <ResponsiveContainer width="100%" aspect={3}>
            <BarChart
                width="100%"
                height="100%"
                data={data.sessions}
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
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <CartesianAxis axisLine={false} />
                <XAxis dataKey="day" />
                <YAxis
                    xAxisId={1}
                    axisLine={false}
                    tickLine={false}
                    orientation={"right"}
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
                    x="3%"
                    y="17px"
                    dominantBaseline="left"
                    fontSize="1.5em"
                    fontWeight="bold"
                    fill="#020203"
                >
                    Activité quotidienne
                </text>
                <Bar
                    dataKey="kilogram"
                    name="Poids (kg)"
                    as={"name"}
                    fill="#020203"
                    radius={[20, 20, 0, 0]}
                    maxBarSize={10}
                />
                <Bar
                    dataKey="calories"
                    name={"Calories brûlées (kCal)"}
                    type={"monotone"}
                    fill="red"
                    radius={[20, 20, 0, 0]}
                    maxBarSize={10}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Barchart

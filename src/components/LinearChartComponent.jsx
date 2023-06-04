import React from "react"
//a décommenter pour utiliser l'API
import { useEffect, useState } from "react"
import { getUserAverageSessions } from "../services/api"
//-------------------------------fin a décommenter pour utiliser l'API
//a commenter pour utiliser l'API
// import { USER_AVERAGE_SESSIONS } from "../data/dataMocked"
//-------------------------------fin a commenter pour utiliser l'API
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

function LinearChartComponent() {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const session = payload[0].payload
            return (
                <div className="custom-tooltip-sessions">
                    <p className="session-label">{`${session.sessionLength}min`}</p>
                </div>
            )
        }
        return null
    }
    //a décommenter pour utiliser l'API
    const [data, setData] = useState({})

    useEffect(() => {
        getUserAverageSessions(12).then((res) => setData(res.data.data))
    }, [])
    //-------------------------------fin a décommenter pour utiliser l'API
    //a commenter pour utiliser l'API
    // const sessionsData = USER_AVERAGE_SESSIONS.find(
    //     (user) => user.userId === 12
    // ).sessions
    //-------------------------------fin a commenter pour utiliser l'API
    return (
        <ResponsiveContainer width="100%" aspect={1}>
            <LineChart
                width="100%"
                height="100%"
                style={{
                    backgroundColor: "#ff0000",
                    borderRadius: "5px",
                }}
                //datas mockées----------------------
                // data={sessionsData}
                //----------------------------------fin datas mockées
                //data récupérées via l'API----------------------
                data={data.sessions}
                //-------------------------------fin datas récupérées via l'API
                fontSize={10}
                margin={{
                    top: 15,
                    right: 5,
                    left: 5,
                    bottom: 5,
                }}
            >
                <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    horizontal={false}
                />
                <CartesianAxis axisLine={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} hide={true} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke={"#FFFFFFa6"}
                    activeDot={{ r: 8 }}
                />
                <text
                    x="5%"
                    y={17}
                    width={147}
                    dominantBaseline="left"
                    textAnchor="top"
                    fontSize="15px"
                    fontWeight="bold"
                    fill="#FFFFFF"
                    opacity={0.5}
                >
                    Durée moyenne des sessions
                </text>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LinearChartComponent

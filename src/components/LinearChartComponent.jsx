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

function LinearChartComponent({ avgSessions }) {
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
    function Day(day) {
        switch (day) {
            case 1:
                return "L"
            case 2:
                return "M"
            case 3:
                return "M"
            case 4:
                return "J"
            case 5:
                return "V"
            case 6:
                return "S"
            case 7:
                return "D"

            default:
                return null
        }
    }

    return (
        <ResponsiveContainer width="100%" height="100%" aspect={1}>
            <LineChart
                width="100%"
                height="100%"
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
                <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    horizontal={false}
                />
                <CartesianAxis axisLine={false} />
                <XAxis
                    dataKey="day"
                    tickFormatter={Day}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis axisLine={false} tickLine={false} hide={true} />
                <Tooltip content={<CustomTooltip />} cursor={false} />
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

import React, { useEffect, useState } from "react"
import UserGreeting from "./UserGreeting"
import { useParams } from "react-router-dom"
import {
    getActivitiesForUserId,
    getAverageSessionsForUserId,
    getPerformanceForUserId,
    getMainDataForUserId,
} from "../../services/UserService"
import LinearChartComponent from "../LinearChartComponent"
import BarChartComponent from "../BarChartComponent"
import RadarChartComponent from "../RadarChartComponent"
import PieChartComponent from "../PieChartComponent"
import NutriCards from "../NutriCards"

const Profile = () => {
    const { userId } = useParams()

    const [user, setUser] = useState({})
    const [activities, setActivities] = useState([])
    const [avgSessions, setAvgSessions] = useState([])
    const [performance, setPerformance] = useState([])
    const [caloriesConsumedMessage, setCaloriesConsumedMessage] = useState("")

    useEffect(() => {
        ;(async () => {
            const mainData = await getMainDataForUserId(userId)
            setUser(mainData)

            const activityData = await getActivitiesForUserId(userId)
            setActivities(activityData)

            const avgSessionsData = await getAverageSessionsForUserId(userId)
            setAvgSessions(avgSessionsData)

            const performanceData = await getPerformanceForUserId(userId)
            setPerformance(performanceData)

            const yesterdaySession = activityData[activityData.length - 1]

            if (yesterdaySession && yesterdaySession.calories >= 300) {
                setCaloriesConsumedMessage(
                    "Félicitation ! Vous avez atteint votre objectif hier 👏"
                )
            } else {
                setCaloriesConsumedMessage(
                    "Courage, hier vous y étiez presque."
                )
            }
        })()
    }, [userId])

    return (
        <>
            <div className="main__container">
                <UserGreeting
                    user={user}
                    caloriesConsumedMessage={caloriesConsumedMessage}
                />

                <div className="main__container-left">
                    <BarChartComponent activities={activities} />
                    <div className={"performance__container"}>
                        <div className={"session"}>
                            <LinearChartComponent avgSessions={avgSessions} />
                        </div>
                        <div className={"polar"}>
                            <RadarChartComponent performance={performance} />
                        </div>
                        <div className={"score"}>
                            <PieChartComponent user={user} />
                        </div>
                    </div>
                </div>
                <div className="main__container-right">
                    <NutriCards user={user} />
                </div>
            </div>
        </>
    )
}

export default Profile

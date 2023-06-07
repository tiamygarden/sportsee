import React, { useEffect, useState } from "react"
import UserGreeting from "./UserGreeting"
import { useParams } from "react-router-dom"
import {
    getActivitiesForUserId,
    getAverageSessionsForUserId,
    getPerformanceForUserId,
    setUserById,
} from "../../services/UserService"
import LinearChartComponent from "../LinearChartComponent"
import BarChartComponent from "../BarChartComponent"
import RadarChartComponent from "../RadarChartComponent"
import PieChartComponent from "../PieChartComponent"
import NutriCards from "../NutriCards"

const Profile = () => {
    const { userId } = useParams()

    const [user, setUser] = useState({})
    useEffect(() => {
        ;(async () => {
            const data = await setUserById(userId)
            setUser(data)
        })()
    }, [userId])

    const [activities, setActivities] = useState([])
    useEffect(() => {
        ;(async () => {
            const data = await getActivitiesForUserId(userId)
            setActivities(data)
        })()
    }, [userId])

    const [avgSessions, setAvgSessions] = useState([])
    useEffect(() => {
        ;(async () => {
            const data = await getAverageSessionsForUserId(userId)
            setAvgSessions(data)
        })()
    }, [userId])

    const [performance, setPerformance] = useState([])
    useEffect(() => {
        ;(async () => {
            const data = await getPerformanceForUserId(userId)
            setPerformance(data)
        })()
    }, [userId])

    return (
        <>
            <div className="main__container">
                <UserGreeting user={user} />
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

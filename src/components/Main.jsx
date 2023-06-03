import React from "react"
import User from "./User"
import LinearChartComponent from "./LinearChartComponent"
import BarChartComponent from "./BarChartComponent"
import RadarChartComponent from "./RadarChartComponent"
import PieChartComponent from "./PieChartComponent"
import NutriCards from "./NutriCards"

const Main = () => {
    return (
        <>
            <div className="main__container">
                <User />
                <div className="main__container-left">
                    <BarChartComponent />
                    <div className={"performance__container"}>
                        <div className={"session"}>
                            <LinearChartComponent />
                        </div>
                        <div className={"polar"}>
                            <RadarChartComponent />
                        </div>
                        <div className={"score"}>
                            <PieChartComponent />
                        </div>
                    </div>
                </div>
                <div className="main__container-right">
                    <NutriCards />
                </div>
            </div>
        </>
    )
}

export default Main

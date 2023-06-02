import React from "react"
import Activities from "./Activities"
import User from "./User"
import Session from "./Session"
import PolargridComponent from "./PolargridComponent"
import Score from "./Score"
import NutriCards from "./NutriCards"

const Main = () => {
    return (
        <>
            <div className="main__container">
                <User />
                <div className="main__container-left">
                    <Activities />
                    <div className={"performance__container"}>
                        <div className={"session"}>
                            <Session />
                        </div>
                        <div className={"polar"}>
                            <PolargridComponent />
                        </div>
                        <div className={"score"}>
                            <Score />
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

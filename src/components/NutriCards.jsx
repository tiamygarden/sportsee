import React from "react"
import PropTypes from "prop-types"

import calIcon from "../assets/calories-icon.png"
import proteinIcon from "../assets/protein-icon.png"
import carbIcon from "../assets/carbs-icon.png"
import fatIcon from "../assets/fat-icon.png"

const NutriCards = ({ user }) => {
    const icons = [calIcon, proteinIcon, carbIcon, fatIcon]

    return (
        <>
            {user?.keyData &&
                Object.entries(user.keyData).map(([key, value], index) => (
                    <div className="nutricards" key={index}>
                        <img
                            className="nutricards__icon"
                            src={icons[index]}
                            alt="icon"
                        />
                        <div className="nutricards__infos">
                            <h6>
                                {value +
                                    (key === "calorieCount" ? "kCal" : "g")}
                            </h6>
                            <p>
                                {key === "calorieCount"
                                    ? "Calories"
                                    : key === "proteinCount"
                                    ? "Protéines"
                                    : key === "carbohydrateCount"
                                    ? "Glucides"
                                    : "Lipides"}
                            </p>
                        </div>
                    </div>
                ))}
        </>
    )
}

NutriCards.propTypes = {
    user: PropTypes.shape({
        keyData: PropTypes.shape({
            calorieCount: PropTypes.number,
            proteinCount: PropTypes.number,
            carbohydrateCount: PropTypes.number,
            fatCount: PropTypes.number,
        }),
    }),
}

export default NutriCards

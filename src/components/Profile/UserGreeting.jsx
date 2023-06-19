import React from "react"
import PropTypes from "prop-types"

function UserGreeting({ user, caloriesConsumedMessage }) {
    return (
        <div className="main__container-user">
            <p className="bonjour-user">
                Bonjour&nbsp;
                <span style={{ color: "red", fontSize: "48px" }}>
                    {user.userInfos?.firstName}
                </span>
            </p>
            {caloriesConsumedMessage && <p>{caloriesConsumedMessage}</p>}
        </div>
    )
}

UserGreeting.propTypes = {
    user: PropTypes.shape({
        userInfos: PropTypes.shape({
            firstName: PropTypes.string,
        }),
    }),
    caloriesConsumedMessage: PropTypes.string,
}

export default UserGreeting

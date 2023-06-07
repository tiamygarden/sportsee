function UserGreeting({ user }) {
    return (
        <div className="main__container-user">
            <p>
                Bonjour&nbsp;
                <span style={{ color: "red", fontSize: "48px" }}>
                    {user.userInfos?.firstName}
                </span>
                &nbsp; !
            </p>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default UserGreeting

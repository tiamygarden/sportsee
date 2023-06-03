// Fonction de formatage des sessions d'activité
export const formatUserActivity = (activityData) => {
    return activityData.map((item) => {
        return {
            userId: item.userId,
            sessions: item.sessions.map((session) => {
                return {
                    day: session.day,
                    kilogram: session.kilogram,
                    calories: session.calories,
                }
            }),
        }
    })
}

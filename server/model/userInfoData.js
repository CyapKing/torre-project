function userInfo(userInfo) {
    return {
        username: userInfo.person.professionalHeadline,
        name: userInfo.person.name,
        picture: userInfo.person.picture,
        projects: userInfo.stats.projects,
        strenghts: userInfo.strenghts,
        interests: userInfo.interests,
        experiences: userInfo.experiences,
        opportunities: userInfo.opportunities,
        languages: userInfo.languages
    }
}

module.exports = userInfo
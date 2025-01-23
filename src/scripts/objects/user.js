const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    numberFollowers: '',
    numberFollowing: '',
    repositories: [],
    events: [],
    forks: '',
    stargazers: '',
    watchers: '',
    language: '',
    
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.numberFollowers = gitHubUser.followers
        this.numberFollowing = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
        this.forks = repositories.forks_count
        this.stargazers = repositories.stargazers_count
        this.watchers = repositories.watchers_count
        this.language = repositories.language

        
    },

    setEvents(events){
        this.events = events
    }

    



    
}

export { user }
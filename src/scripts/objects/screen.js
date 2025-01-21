const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                               <img src="${user.avatarUrl}" alt= "Foto do perfil do usuário" />
                                <div class="data">
                                     <h1>${user.name ?? "Não possui nome cadastrado 😥"}</h1>
                                     <p>${user.bio ?? "Não possui bio cadastrada 😥"}</p>
                                     <p>Seguidores: ${user.numberFollowers}</p>
                                     <p>Seguindo: ${user.numberFollowing}</p>
                                </div>
                             </div>`  
               
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}"target="_blank">${repo.name}</a></li>`) 
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories-events section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventItens = ''
        user.events.forEach(events => eventItens += `<li> <p>${events.name}</p></li>`)

        if(user.events.length > 0){
            this.userProfile.innerHTML = `<div class="repositories-events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                            </div>`
                                            
                                            
        }



    



    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }
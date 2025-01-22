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
        if(Array.isArray(user.events) && user.events.length > 0){
            user.events.forEach(event =>{
                if (event.payload && event.payload.description) {
                    if (event.type === 'CreateEvent') {
                        eventItens += `<li><strong>${event.repo.name}</strong>: Criou algo no repositório.</li>`
                    } else if (event.type === 'PushEvent') {
                        eventItens += `<li><strong>${event.repo.name}</strong>: Realizou um push no repositório.</li>`
                    }
                }

            })
        } 
        if (eventItens){
        this.userProfile.innerHTML += `<div class="repositories-events section">
                                            <h2>Eventos</h2>
                                            <ul>${eventItens}</ul>
                                        </div>`
        } else {
            this.userProfile.innerHTML += `<div class= "repositories-events section">
                                            <h2>Eventos</h2>
                                            <p>Nenhum evento válido encontrado.</p>
                                          </div>`
        }

        


    



    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }

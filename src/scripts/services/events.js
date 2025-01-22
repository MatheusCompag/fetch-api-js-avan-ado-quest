import { baseUrl } from "../variables.js"

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events`)
    const eventsData = await response.json()
    return eventsData || [];
    
}


export { getEvents }
import { baseUrl } from "../variables.js"

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events`)
    console.log( await response.json())
    
}


export { getEvents }
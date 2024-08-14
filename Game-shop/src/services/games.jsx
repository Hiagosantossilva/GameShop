import axios from "axios"

const gamesAPI = axios.create({baseURL: "http://localhost:8000"})

async function getGames(){
  const response = await gamesAPI.get('/')
  return response.data
}
export{
  getGames
  
}

const baseURL = 'https://tarea-1-breaking-bad.herokuapp.com/api/'

export async function getEpisodes (){
    const response = await fetch(`${baseURL}episodes`)
    const responseJson = await response.json()
    
    
    return responseJson
}


export async function getCharactersBySearch(q){
    const response = await fetch(`${baseURL}characters?name=${q}`)
    const responseJson = await response.json()
    return responseJson
}


export default {
    getEpisodes,
    getCharactersBySearch
}

    //    const new_episodes= []               
    //    for (const index of responseJson){
    //        if (responseJson[index].season == s){
    //            new_episodes.push(responseJson[index])
    //        }
    //    }
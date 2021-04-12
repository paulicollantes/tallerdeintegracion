const baseURL = 'https://tarea-1-breaking-bad.herokuapp.com/api/'

export async function getEpisodes (){
    const response = await fetch(`${baseURL}episodes`)
    const responseJson = await response.json()
    
    
    return responseJson
}
export default {
    getEpisodes
}

    //    const new_episodes= []               
    //    for (const index of responseJson){
    //        if (responseJson[index].season == s){
    //            new_episodes.push(responseJson[index])
    //        }
    //    }
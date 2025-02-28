// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). 
// Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef

async function fetchJson(url){
    const response = await fetch(url);
    const obj = await response.json()
    return obj
}

const getChefBirthday = async (id)=>{
    let birthday
    const userId = await fetchJson(`https://dummyjson.com/recipes/${id}`).then(data=>data.userId);
    const chef = await fetchJson(`https://dummyjson.com/users/${userId}`)
    .then(response => birthday = response.birthDate)
    return birthday
}

getChefBirthday(2).then(birthday=>(console.log("La data di nascita dello chef è:", birthday))).catch(error=>console.error(error))
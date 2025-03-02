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


    let userId;
    try{
         userId = await fetchJson(`https://dummyjson.com/recipes/${id}`)
        .then(data=>data.userId)
    }catch(error){
       throw new Error("Non è possibile recuperare l'id dell'utente")
    }
    if(userId.message){throw new Error(response.message)}

    let chef 
    try{await fetchJson(`https://dummyjson.com/users/${userId}`)
    .then(response => chef = response.birthDate)
    }catch{
        throw new Error("Non è stato trovato un utente con questo id")
    }
    if(response.message){throw new Error(response.message)}

    return chef
}

// IIFE
(async()=>{
    try{
        const birthday = await getChefBirthday(2)
        console.log("La data di nascita dello chef è:", birthday)
    }catch(error){
       console.log(error)
    }
})()


// PRIMA VERSIONE 
// getChefBirthday(2)
// .then(birthday=>(console.log("La data di nascita dello chef è:", birthday)))
// .catch(error=>console.error(error))
// .finally(console.log("Fine del codice"))
async function getChefBirthday(id) {

    let recipe
    try {   const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
            recipe = await recipeResponse.json(); 
        }catch(error){
            console.error(error);
            throw new Error(`Non recupero la ricetta con id ${id}`)
        }

    if (recipe.message){
        throw new Error(`Ricetta con id ${id} non trovata`)
    }
    
    let chef
    try{
        const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
        chef = await chefResponse.json()
    }catch(error){
        console.error(error);
        throw new Error(`Non recupero lo chef con id ${id}`)
    }
    if (recipe.message){
        throw new Error(`Chef con id ${id} non trovata`)
    }

    return chef.birthday
}

( async()=>{
    try {
        const birthday = await getChefBirthday(1)
        console.log("Data di nascita dello chef:", birthday)
    }catch{
        console.error(error);
    }
} )
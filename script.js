// SNACK 1
// Ottieni il titolo di un post con una Promise.
// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}


const getPostTitle = id => {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolve(obj))
            .catch(reject)
    });
    return promessa
}

getPostTitle(1)
    .then(obj => console.log(obj.title))
    .catch(error => console.error(error))


// const fetchRequest = fetch('https://dummyjson.com/posts/1')

// function resolveFetch(response) {
//     return response.json()
// }

// const jsonTransformation = fetchRequest.then(resolveFetch)

// jsonTransformation.then(function (obj) {
//     console.log(obj)
// })
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


// SNACK 2
// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
    return new Promise((resolve, reject) => {
        console.log('Sto lanciando il dado');
        setTimeout(() => {
            const valore = Math.floor(Math.random() * 6) + 1;
            if (valore < 0.2) {
                reject("Dado incastrato")
            }
            else {
                resolve(`${valore}`)
            }
        }, 3000)
    })
}

lanciaDado()
    .then(number => console.log(number))
    .catch(error => console.error(error))












// 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".


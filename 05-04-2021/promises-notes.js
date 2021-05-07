//Las promesas son objetos

//Constructor

//Resolve es una función.
//Pasa la promesa de pendiente a Resuelto

//Reject es una función.

const promise = new Promise((resolve, reject) => {
    const todoCool = true
    if(todoCool){
        resolve('ok')
    } else{
        reject('not ok :(')
    }
})

promise
    .then((respuesta) => { console.log(respuesta) })
    .catch((error) => { console.log(error) })

    
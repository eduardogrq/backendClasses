

// function construir(muro){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             muro.construido = true

//             if(muro.construido){
//                 resolve(muro)
//             } else{
//                 const error = new Error('No se pudo construir')
//                 reject(error)
//             }

//         }, 1000)
//     })
// }

// const promesaDeConstruccion =  construir({})
// promesaDeConstruccion
//     .then((muroConstruido) => {
//         console.log('muro construido: ', muroConstruido)
//     })
//     .catch((error) => {
//         console.log('error al construir: ', error)
//     })

function construir(muro){
    return new Promise((resolve, reject) => {
        muro.construir = true
        setTimeout(() => {
            if(muro.construir){
                resolve(muro)
            } else{
                const error = new Error('Mala ejecución')
                reject(error)
            }
        }, 1000)
    })
}

function aplanar(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.aplanado = true

            const error = muro.aplanado 
            ? null : new Error('No se pudo aplanar')

            if(error) {
                reject(error)
                return
            }

            resolve(muro)

        }, 2000)
    })
}


function pintar(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.pintado = true

            const error = muro.pintado
                ? null
                : new Error('No se pudo pintar')

            if(error) return reject(error)

            resolve(muro)
        }, 1000)
    })
}



// const muroConstruido = construir({})

construir({})
    .then((muroConstruido) => {
        console.log('muro construido: ', muroConstruido)
        aplanar(muroConstruido)
            .then((muroAplanado) => {
                console.log('muro aplanado: ', muroAplanado)
                pintar(muroAplanado)
                    .then((muroPintado) => {
                        console.log('muro pintado: ', muroPintado)
                    })
                    .catch((error) => {
                        console.log('error al pintar: ', error)
                    })
            })
            .catch((error) => {
                console.log('error al aplanar: ', error)
            })
    })
    .catch((error) =>{
        console.log('error al construir: ', error)
    })
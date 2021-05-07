const fs = require('fs')

fs.promises.mkdir('carpetaNueva')
    .then(()=> console.log('carpeta creada'))
    .catch((err) => console.log(er))
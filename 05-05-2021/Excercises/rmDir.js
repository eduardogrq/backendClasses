const fs = require('fs')


fs.promises.rmdir('carpetaNueva', {recursive:true})
    .then(() => console.log('carpeta borrada'))
    .catch((err) => console.log(err))
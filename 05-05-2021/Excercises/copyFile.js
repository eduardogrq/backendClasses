const fs = require('fs')

fs.promises.copyFile('asyncFile.txt', 'copia.txt')
    .then(() => console.log('copiado'))
    .catch((err) => console.log(err))
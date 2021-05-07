const fs = require('fs')

fs.promises.appendFile('asyncFile.txt',' texto-nuevo')
    .then(() => console.log('append hecho'))
    .catch((err) => console.log(err))
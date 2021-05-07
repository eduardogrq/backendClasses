
const fs = require('fs')


fs.promises.unlink('asyncFile.txt')
    .then(() => console.log('unlink'))
    .catch((err) => console.log(err))
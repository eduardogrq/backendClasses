const fs = require('fs')


fs.promises.readdir('nuevaCarpeta')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
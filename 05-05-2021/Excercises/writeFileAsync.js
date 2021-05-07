const fs = require('fs')


async function writeFile(file, data) {
    await fs.promises.writeFile(file,data)
}

writeFile('asyncFile.txt', 'texto texto')
    .then( ()=>{
        console.log('creado');
    })
    .catch((err) => {
        console.log(err);
    })
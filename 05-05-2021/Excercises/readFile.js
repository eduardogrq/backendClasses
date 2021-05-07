const fs = require('fs')

async function readFile() {
    await fs.promises.readFile('asyncFile.txt','utf8')
}


readFile()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
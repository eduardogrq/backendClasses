const fs = require('fs');

fs.writeFile('created.txt', 'Hola desde node fs', 'utf8', (error) => {
    if(error){
        console.log('Existe un error en append: ')
        return
    } 
})

// Por cada funcion deberiamos tener un script ejecutable
// readFile ----
// appendFile 
// unlink
// copyFile

fs.readFile('created.txt', 'utf8', (error, data) => {
    if(error){
        console.log('Existe un error en read: ')
        return
    } else{
        console.log(data)
    }
})

fs.appendFile('created.txt', 'Nuevo Mensaje', (error) => {
    if(error){
        console.log('Existe un error en append: ')
        return
    } 
})

fs.unlink('example.txt', (error) => {
    if(error){
        console.log('Existe un error en unlink: ')
        return
    } 
})

fs.copyFile('created.txt', 'example2.txt', (error) => {
    if(error){
        console.log('Existe un error en copyfile: ')
        return
    } 
})
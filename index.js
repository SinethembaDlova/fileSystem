const fs = require('fs')

fs.writeFile('./src/assets/file.txt', 'Hello World, my name is Sinethemba Dlova', (err) =>{
    if (err) throw err;
    console.log('Succefully wrote in a file.');
});
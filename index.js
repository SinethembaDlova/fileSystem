const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, '/src/assets/', 'file.txt'), 'Hello World, my name is Sinethemba Dlova', (err) => {
    if (err) throw err;
    console.log('Succefully wrote in a file.');

    fs.readFile(path.join(__dirname, '/src/assets/', 'file.txt'), 'utf-8', (err, text) => {
        if (err) throw err;
        console.log('text: ', text);
        const list = text.split(' ');
        console.log('# of words: ', list.length)
        list.map((word, index) => {
            console.log(index + ": " + word);
        });
    })
})

process.on('uncaughtException', err => {
    console.error('There was an uncaught error: ', err)
    process.exit(1)
})
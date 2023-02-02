const fs = require('fs');
const path = require('path');

// Create a file with fs writeFile function and wrote on it.
fs.writeFile(path.join(__dirname, '/src/assets/', 'file.txt'), 'Hello World, my name is Sinethemba Dlova', (err) => {
    if (err) throw err;
    console.log('Succefully wrote in a file.');

    // Added more text with fs appendFIle .
    fs.appendFile(path.join(__dirname, '/src/assets/', 'file.txt'), '\n I love programming', (err) => {
        if (err) throw err;
        console.log('Succefully wrote in a file.');

    })

    // read the file created with fs readFile and played with the data.
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
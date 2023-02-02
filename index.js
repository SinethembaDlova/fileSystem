const fsPromise = require('fs').promises;
const path = require('path');

const fileOperations = async () => {
    try {
        // read the file created with fs promises readFile function.
        const data = await fsPromise.readFile(path.join(__dirname, '/src/assets/', 'file.txt'), 'utf-8');
        console.log('data: ', data);

        // Created a file with fs writeFile function and wrote on it.
        await fsPromise.writeFile(path.join(__dirname, '/src/assets/', 'uefa.txt'), 'I am such a football lover');
        console.log('Succefully wrote in a file.');

        // Appending more text with fsPromise appendFIle function.
        await fsPromise.appendFile(path.join(__dirname, '/src/assets/', 'uefa.txt'), '\n and I am a Chelsea fan');
        console.log('Succefully appended in the file.');

        // Renaming a file with fsPromise remanch function.
        await fsPromise.rename(path.join(__dirname, '/src/assets/', 'uefa.txt'), path.join(__dirname, '/src/assets/', 'football.txt'))
        console.log('Successfully renamed the file.');

        const newData = await fsPromise.readFile(path.join(__dirname, '/src/assets/', 'file.txt'), 'utf-8');
        console.log('data: ', newData);

    } catch (err) {
        console.error(err);
    }
}

fileOperations();
const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.join(__dirname, '/src/constants/'))){
    fs.mkdir(path.join(__dirname, '/src/constants/'), (err) => {
        if (err) throw err
        console.log('Directory successfully created')
    })
}

if (fs.existsSync(path.join(__dirname, '/src/constants/'))){
    fs.rmdir(path.join(__dirname, '/src/constants/'), (err) => {
        if (err) throw err
        console.log('Directory successfully removed')
    })
}

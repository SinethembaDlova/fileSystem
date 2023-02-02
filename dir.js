const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/src/constants/'), (err) => {
    if (err) throw err
    console.log('Directory successfully createdno')
})
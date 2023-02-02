const fs = require('fs');
const path = require('path');

//Creating reading streams form when we are dealing with huge sum of data
const rs = fs.createReadStream(path.join(__dirname, '/src/assets/', 'huge.txt'), { encoding: 'utf8'});
//Creating write streams form when we are dealing with huge sum of data
const ws = fs.createWriteStream(path.join(__dirname, '/src/assets/', 'newHuge.txt'));

rs.pipe(ws);
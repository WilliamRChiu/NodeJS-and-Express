const {createReadStream} = require('fs');
const stream = createReadStream('./content/big.txt',{highWaterMark:90000});

//default 64 kb
//last buffer - remainder
//highwatermark - control size
//const stream = createReadStream('./content/big.txt',{highWaterMark: 90000, encoding:utf8}))



stream.on('data', (result) => {
console.log(result);
})
stream.on('error',()=>{console.log(error)});
const EventEmitter = require('events');

const CustomEmitter = new EventEmitter();

CustomEmitter.on('response', () => {
    console.log('data recieved');
});

CustomEmitter.on('response', (name, id)=>{
    console.log(`data recieved for user ${name} with id: ${id}`);
});
CustomEmitter.emit('response', "john", 34);

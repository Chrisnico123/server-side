const {EventEmitter} = require('events')

const myEvent = new EventEmitter();

const happy = (name) => {
    console.log(`test ${name}`)
}

myEvent.on("birthday" , happy);
myEvent.emit("birthday", ("BItch"))
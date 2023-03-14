const { EventEmitter } = require('events');

const myEvents = new EventEmitter();

const makeCoffee = (coffee) => {
    console.log(`Kopi ${coffee} telah dibuat`)
}

const makeBill = (price) => {
    console.log(`Membuat Bill dengan harga ${price}`)
}

// //initialisasi dengan nama baru
// myEvents.on('coffee-order' , makeCoffee);
// myEvents.on('coffee-bill' , makeBill);

// //proses pemanggilan
// myEvents.emit('coffee-order' , {coffee : "kopi tubruk"})
// myEvents.emit('coffee-bill' , {price : 20000})

//another way
const makeorder = ({coffee ,price}) => {
    makeCoffee(coffee);
    makeBill(price);
}

myEvents.on("order" , makeorder);
myEvents.emit("order" , {coffee : "Kopi Tubruk" , price :100000})

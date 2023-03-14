const fs = require("fs")
//read file
const read = fs.createReadStream('./input.txt' , {
    highWaterMark : 15
})

const write = fs.createWriteStream('./output.txt')

read.on('readable' , () => {
    try{
        //if you want to see the data in terminal
        //process.stdout.write(`[${read.read()}]`)

        //process write in other file
        write.write(`${read.read()}`)

    }catch(error){
        //error
    }
})

read.on('end' , () => {
    write.end();
    console.log('done')
})
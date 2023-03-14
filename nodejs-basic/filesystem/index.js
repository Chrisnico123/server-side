const fs = require("fs")

const cekData = (error , file) => {
    (error) ? console.log(error) : console.log(file);
}

fs.readFile('text.txt' , 'UTF-8' , cekData)
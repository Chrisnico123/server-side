const datamemory = process.memoryUsage().heapUsed;
const nameargv = process.argv[2];
const env = process.env.NODE_ENV;

for(let i=0;i<=100000;i++){
    //null
}

const currentdatamemory = process.memoryUsage().heapUsed;

console.log(datamemory);
console.log(nameargv);
console.log(env);
console.log(`dari ${datamemory} jadi ${currentdatamemory}`);
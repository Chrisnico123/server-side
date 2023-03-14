const importtiger = require('./tiger.js')
const importwolf = require('./wolf.js')

const fight = (tiger , wolf) => {
    if(tiger.strength > wolf.strength){
        tiger.tiger();
        return;
    }
    if(tiger.strength < wolf.strength){
        wolf.wolf();
        return;
    };
    console.log("tiger = wolf");
}

const tiger = new importtiger();
const wolf = new importwolf();

fight(tiger , wolf);
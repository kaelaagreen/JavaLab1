"use strict";

let username ="Mitch Cuckovich";
let age = 25;
let birthday = "January 24";
let detroitGC = true;
let lifeEvents = ["I was born in Troy, Michigan.", "I went to Hope College", "I went to Junior Olympics when I was 10 years olf. I placed 1th in the nation in the 800 meter event.", "I'm a graduate of the front-end bootcamp."];

if (detroitGC = true) {

    console.log (`My name is ${username} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);

} else {

    console.log (`My name is ${username} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);

}

for (let i=0; i<lifeEvents.length; i++) {
console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
    let randomNumber = Math.ceil(Math.random() * 10);
    if (randomNumber !== 5){
        console.log(`${randomNumber} !== 5`);
        counter++;
    } else {
        counter++;
        console.log(`5 === 5. It took ${counter} interations to randomly generate the number 5.`);
        break;
    }
};
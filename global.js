// console.log(global);
// clearInterval
// setInterval
var time = 0;
const setIntervalId = setInterval(() => {
    time++; 
    console.log(time + ' seconds');
    if(time === 5) {
        clearInterval(setIntervalId);
    }
    console.log('Printed after 3 seconds');
},3000
)

// setTimeout

globalThis.setTimeout(() => {
    console.log('Hello World');
    clearInterval(setIntervalId);
}, 4000
)

// arrow functions

const greet = (name) => {
    console.log(`Hello ${name}`);
};

greet('Abdi');
// CALLBACK
console.log("Start Application");
/*
() => { console.log("Tick - After 5 seconds") }

function () {
    console.log("Tick - After 5 seconds")
}

ARROW FUNCTION = 
*/

// 1.
setTimeout(() => console.log("Tick - After starting application (1er Callback)"), 2000);


// 2.

const callback = () => {
    console.log("Tick - After 3 seconds (2do Callback)");
}

setTimeout(callback, 3000);

// 3.

function callback2() {
    console.log("Tick - After 4 seconds (3er Callback)");
}

setTimeout(callback2, 4000);





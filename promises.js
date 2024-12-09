// PROMISES

// 1.


// let promesaDeIrAHuaral = Promise.resolve("Huaral");
// console.log(promesaDeIrAHuaral);

// let promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Huaral");
//     }, 2000);
// });
// console.log(promesa);

// let promesa2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Huaral");
//     }, 3000);
// });
// console.log(promesa2);

// promesa.then(value => console.log(`Por fin fuimos a ${value}`));

// promesa2.catch(value => console.log(`No pudimos ir a ${value}`));


let promesa3 = new Promise((resolve, reject) => {
    try {
        // throw new Error("Error en el proceso");
        setTimeout(() => {
            
            resolve("Huaral");
            
        }, 2000);
        
    } catch (error) {
        console.log(`Error: ${error}`);
        reject(error);
    }
});

promesa3
    .then(value => console.log(`Promise 3: Por fin fuimos a ${value}`))
    .catch(error => console.log(`Promise 3: Error: ${error}`));


// promesaDeIrAHuaral.then(value => console.log(`Por fin fuimos a ${value}`));




// 2.
let promesaA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Huaral");
    }, 500);
});

let promesaB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Viaje con Mama");
    }, 1000);
});

let promesaC = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Viaje a Trujillo");
    }, 1500);
});

const resultados = Promise.all([promesaA, promesaB, promesaC]).then(values => {
    console.log("Resultados de las promesas");
    console.log(values);
}).catch(error => {
    console.log("Error en alguna promesa");
}
);

console.log(resultados);






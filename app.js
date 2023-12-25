//1
// console.log("Hello JavaScript from Nodejs");

//2
// let x;
// console.log(x);

// let notQuitePi = parseFloat(3.14);
// console.log(notQuitePi);
// let evenLessPi = parseInt(3.14);
// console.log(evenLessPi);
// console.log(notQuitePi.toString()-3);

// let destination = "world";
// let greeting1 = `Hello, ${destination.toUpperCase}!`;

// let greeting2 = `<div>Hello</div>
// <div>${destination}</div>!
`
//html`<div>Hello, ${destination}</div>!`;

//2.1.1
console.log("JS" + true);
console.log("JS" + 3.14);
console.log(3.14 + false);

//2.1.2
console.log("JS" * true);
console.log("JS" * 3.14);
console.log(3.14 * false);

//2.1.3
console.log("JS" / true);
console.log("JS" / 3.14);
console.log(3.14 / false);

//2.1.4
console.log(parseFloat("3.14")+ 0.0015);
console.log(3.14.toString() + 15);
console.log(Boolean("true"));

//2.2.1
const movies = ["Grinch", "Die Hard", "Home Alone"];
console.log(movies);
for(let movie of movies) {
    console.log(movie);
};

//2.2.2
const carManufacturers = ["Lada", "ZAZ", "Geely"];
const carManufacturersString = carManufacturers.join(", ");
console.log(carManufacturersString);
console.log(carManufacturersString.split(", "));

//2.2.3
const names = ["Rob", "Bob", "John"];
names.forEach(function(name) {
    console.log(`Hello, ${name}!`);
});

//2.2.4
let booleanArr = [-3.14, -1, 0 , 1, 3.14];
for (let i = 0; i < booleanArr.length; i++) {
    booleanArr[i] = Boolean(booleanArr[i]);
};
console.log(booleanArr);

//2.2.5
let numArr1 = [1, 6, 7, 8, 3, 4, 5, 6];
numArr.sort((a, b) => b - a);
console.log(numArr);

//2.2.6
const numArr2 = [1, 6, 7, 8, 3, 4, 5, 6];
let resultArr2 = [];
let counter2 = 0;
for (let i = 0; i < numArr2.length; i++) {
    if (numArr2[i] > 3) {
        resultArr2[counter2] = numArr2[i];
        counter2++;
    };
}
console.log(resultArr2);

//2.2.7
let a = parseInt(Math.random()*10);
for (a; a <10; a++) {
    console.log(a);
};

//2.2.8
for (let i = 2; i < 100; i++ ) {
    for (let j = 2; j <= i; j++) {
        if (i / j === 1 && i % j === 0) {
            console.log(i);
        } else if (i / j > 1 && i % j === 0) {
            break;
        }
    }
}

//2.2.9
for (let i = 1; i < 100; i++ ) {
    if (i % 2 > 0) {
        console.log(i);
    }
}




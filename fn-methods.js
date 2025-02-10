
// **** call и apply

// const showThis = function () {
//     console.log('showThis -> this', this);
// };

// const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
// };

// const hat = {
//     color: 'black',
// };

// changeColor.call(hat, 'orange');
// console.log(hat);
// // showThis.call(hat);// первыйм передаем объект который нужен, а все последующие произвольное количество аргументов

// const sweater = {
//     color: 'green',
// };
// changeColor.call(sweater, 'tomato');
// console.log(sweater);

// showThis.apply(sweater)//первыйм передаем объект который нужен, а все последующие произвольное количество мвссивов



// ************---- bind------******

const showThis = function () {
    console.log('showThis -> this', this);
};

const changeColor = function (color) {
    console.log('changeColor -> this', this);
    // this.color = color;
};

const hat = {
    color: 'black',
};

const sweater = {
    color: 'green',
};


const changeHatColor = changeColor.bind(hat);
const changeSweterColor = changeColor.bind(sweater);
changeHatColor('yellow');
console.log(hat);

changeSweterColor('red');
console.log(sweater);


// ********** ТРЕНИРУЕМСЯ 4 *********

const counter = {
    value: 0,
    increment(value) {
        console.log('this.increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('this.decrement -> this', this);
        this.value -= value;
    },
};
const updateCounter = function (value, operation) {
    // counter.increment();
    // counter.decrement();
    operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(7, counter.decrement.bind(counter));

console.log(counter);
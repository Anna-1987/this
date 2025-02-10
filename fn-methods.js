
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
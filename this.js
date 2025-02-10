// Функция это часный случай объекта -> ССЫЛОЧНЫЙ ТИП

// console.log('[] === []', [] === []);
// console.log('{} === {}', {} === {});
// console.log(
//     'function() {} === function() {}',
//     function () { } === function () { }
// );

// // Контекст (this)
// //    - где и как была объявлена функция НЕ ИМЕЕТ ЗНАЧЕНИЯ на контекст
// //    - контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showNag -> this', this)
//     },
// };
// user.showTag(); // смотрим что слево от точки (user), значит this ссілается на этот объект




// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo(); // если вызывать функцию не через объект(как в пр1), то this будет undefined(в строгом режиме) и windows(в не строгом режиме)



// //******Как метод объекта, но объявленна как внешняя функция
// // в контексте объекта * /

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// // showTag(); //  undefined

// const user2 = {
//     tag: 'Mango',
// };

// user2.showUser2Tag = showTag;
// console.log('user2', user2);

// user2.showUser2Tag();


// ******* Вызов без контекста, но объявленна как метод объекта


// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();
// const outerShowTag = user.showTag;

// outerShowTag();


//******-----------  Контекст в callback-функциях

// const userCallback = {
//     tag:'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// }

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(userCallback.showTag);


// ********** ТРЕНИРУЕМСЯ 1 *********

// const fn = function () {
//     console.log('fn -> this', this)
// };
// fn();

// ********** ТРЕНИРУЕМСЯ 2 *********

// const book = {
//     title: 'Reach for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };

// book.showThis();// ссылка на объект

// const outerShowThis = book.showThis;
// outerShowThis(); // unefinde

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // error


// ********** ТРЕНИРУЕМСЯ 3 *********

// const mackChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };

//     // changeColor();

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     sweater.updateColor('red');


//     return sweater.updateColor;
// };

// const swapColor = mackChangeColor();

// swapColor('blue');



// ********** ТРЕНИРУЕМСЯ 4 *********


// const mackChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     };

//     return changeColor;
// };

//     const updateColor = mackChangeColor();
//     updateColor('red');


// const hat = {
//     color: 'biue',
//     updateColor,
// };

// hat.updateColor('orange');


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

updateCounter(10, counter.increment);
updateCounter(5, counter.decrement);
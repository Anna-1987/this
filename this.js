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


const user = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this', this);
        console.log('showTag -> this.tag', this.tag);
    },
};

user.showTag();
const outerShowTag = user.showTag;

outerShowTag();
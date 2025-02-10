
// **** call и apply

const showThis = function () {
    console.log('showThis -> this', this);
};

const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

const hat = {
    color: 'black',
};

showThis.call(hat);

const sweater = {
    color: 'green',
};
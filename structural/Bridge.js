//Зачем: Позволяет двум или более объектам со своими интерфейсами практически независимо взаимодейстовать друг с другом

// input devices

//Жесты и движения мышки имеют свои интерфейсы методов, которые тем не менее обращаются к одинаковым методам в
//девайсах, с которыми они работают

const Gestures = function (output) {
    this.output = output;

    this.tap = function () { this.output.click(); };
    this.swipe = function () { this.output.move(); };
    this.pan = function () { this.output.drag(); };
    this.pinch = function () { this.output.zoom(); }
};

const Mouse = function (output) {
    this.output = output;

    this.click = function () { this.output.click(); };
    this.move = function () { this.output.move(); };
    this.down = function () { this.output.drag(); };
    this.wheel = function () { this.output.zoom(); }
};

// output devices

const Screen = function () {
    this.click = function () { console.log("Screen select"); };
    this.move = function () { console.log("Screen move"); };
    this.drag = function () { console.log("Screen drag"); };
    this.zoom = function () { console.log("Screen zoom in"); }
};

const Audio = function () {
    this.click = function () { console.log("Sound oink"); };
    this.move = function () { console.log("Sound waves"); };
    this.drag = function () { console.log("Sound screetch"); };
    this.zoom = function () { console.log("Sound volume up/down"); }
};

const screen = new Screen();
const audio = new Audio();

const hand = new Gestures(screen);
const mouse = new Mouse(audio);

//Итого мы имеем два объекта, использующих свои уникальный методы, которые применимы к тому или иному типу девайса
//По девайсу можно сделать конструктор, но мы этого конечно делать не будем:D
//Btw, все для больше наглядности, слишком много абстракции тоже плохо
hand.tap();
hand.swipe();

mouse.click();
mouse.wheel();

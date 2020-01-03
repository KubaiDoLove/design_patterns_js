//Прототипирование наше все и прототипированием мы едины
//Зачем: Легкое наследование необходимых свойств, методов и переменных

const Bicycle = function(brand) {
    this.brand = brand;
};

Bicycle.prototype.goForward = percent => {
    percent = ' Bicycle Moving forward at ' + percent + ' percent speed!';
    return percent;
};

let bike = new Bicycle('Stells');
let speed = bike.goForward(100);

console.log(speed);

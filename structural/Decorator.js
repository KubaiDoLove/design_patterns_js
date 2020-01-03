//Зачем: Добавление свойств и методов существующим классам, чью общую структуру не очень хочется трогать

class Coffee {
    cost() {
        return 500
    }
}

const withSugar = coffee => {
    const cost = coffee.cost();
    coffee.cost = () => cost + 100;
};

const coffee = new Coffee();
const coffeeCost = coffee.cost();

console.log(coffeeCost);

withSugar(coffee);
const coffeeCostWithSugar = coffee.cost();

console.log(coffeeCostWithSugar);

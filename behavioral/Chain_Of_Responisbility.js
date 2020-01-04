//Зачем: построение цепочки вызовов

class Request {
    constructor(amount) {
        this.amount = amount;
        console.log("Requested: $" + amount);
    }

    get(bill) {
        let count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        console.log("Dispense " + count + " $" + bill + " bills");
        return this; //Цепочка возможна тогда и только тогда, когда метод возвращает this
    }
}

const request = new Request(586);

request.get(100).get(50).get(20).get(10).get(5).get(1);

//Зачем: Переводит один интерфейс объекта(свойства, методы) в другой

//Старый интерфейс

function Shipping() {
    this.request = function (zipStart, zipEnd, weight) {
        //..
        return weight * 0.2
    }
}

//Новый интерфейс, в нем нам необходимо залогиниться

function AdvancedShipping() {
    this.login = function(credentials) { /* ... */ };
    this.setStart = function(start) { /* ... */ };
    this.setDestination = function(destination) { /* ... */ };
    this.calculate = function(weight) { return weight * 0.1; };
}

//Адаптированный интерфейс

function ShippingAdapter(credentials) {
    let shipping = new AdvancedShipping();

    //мы проводим процедуру авторизации
    shipping.login(credentials);

    return {
        request: function (zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight)
        }
    }
}

//Идея в том, что авторизованные пользователи платят меньше за доставку
const oldInterface = new Shipping();
const adapter = new ShippingAdapter('03e-day');

const oldPrice = oldInterface.request(null, null, 50);
const loggedInPrice = adapter.request(null, null, 50);

console.log(oldPrice, loggedInPrice);

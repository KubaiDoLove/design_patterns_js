//Зачем: Определить семейство алгоритмов, инкапсулировать их и сделать взаимозаменяемыми

const Shipping = function() {
    this.company = "";
};

Shipping.prototype = {
    setStrategy: function(company) {
        this.company = company;
    },

    calculate: function(package) {
        return this.company.calculate(package);
    }
};

const UPS = function() {
    this.calculate = function(package) {
        // calculations...
        return "$45.95";
    }
};

const USPS = function() {
    this.calculate = function(package) {
        // calculations...
        return "$39.40";
    }
};

const Fedex = function() {
    this.calculate = function(package) {
        // calculations...
        return "$43.20";
    }
};

const pkg = { from: "76712", to: "10012", weigth: "lkg" };

const ups = new UPS();
const usps = new USPS();
const fedex = new Fedex();

const shipping = new Shipping();

shipping.setStrategy(ups);
console.log("UPS Strategy: ", shipping.calculate(pkg));
shipping.setStrategy(usps);
console.log("USPS Strategy: ", shipping.calculate(pkg));
shipping.setStrategy(fedex);
console.log("Fedex Strategy: ", shipping.calculate(pkg));


//Зачем: сохранять и востанавливать из памяти тот или иной объект

const Person = function(name, street, city, state) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
};

Person.prototype = {
    hydrate: function () {
        return JSON.stringify(this);
    },

    dehydrate: function(memento) {
        const alive = JSON.parse(memento);
        this.name = alive.name;
        this.street = alive.street;
        this.city = alive.city;
        this.state = alive.state;
    }
};

const CareTaker = function() {
    this.mementos = {};

    this.add = function(key, memento) {
        this.mementos[key] = memento;
    };

    this.get = function(key) {
        return this.mementos[key]
    }
};


const mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
const john = new Person("John Wang", "48th Street", "San Jose", "CA");
const caretaker = new CareTaker();

caretaker.add(1, mike.hydrate());
caretaker.add(2, john.hydrate());

mike.name = 's';
john.name = 's';

console.log(mike, john);

mike.dehydrate(caretaker.get(1));
john.dehydrate(caretaker.get(2));

console.log(mike, john);

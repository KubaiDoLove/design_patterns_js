class Computer {
    constructor(make, model, processor, memory, tag) {
        this.flyweight = FlyweightFactory.get(make, model, processor);
        this.memory = memory;
        this.tag = tag;
    }

    getMake() {
        return this.flyweight.make;
    }
}

const ComputerCollection = function () {
    let computers = {};
    let count = 0;

    return {
        add: (make, model, processor, memory, tag) => {
            computers[tag] = new Computer(make, model, processor, memory, tag);
            count++;
        },
        get: tag => computers[tag],
        getCount: () => count
    }
};

const Flyweight = function(make, model, processor) {
    this.make = make;
    this.model = model;
    this.processor = processor;
};

const FlyweightFactory = (function() {
    let flyweights = {};

    return {
        get: (make, model, processor) => {
            if (!flyweights[make + model]) {
                flyweights[make + model] = new Flyweight(make, model, processor);
            }

            return flyweights[make + model];
        },
        getCount: () => {
            let count = 0;
            for (let f in flyweights) count++;
            return count;
        }
    }
})();

const computers = new ComputerCollection();

computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
computers.add("HP", "Envy", "Intel", "2G", "TXU003283");


console.log("Computers: " + computers.getCount());
console.log("Flyweights: " + FlyweightFactory.getCount());

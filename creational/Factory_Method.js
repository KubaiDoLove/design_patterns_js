//создавать те или иные типы используемых классов
export function createCar(model) {
    let car = new Car(model);

    if (typeof car.printModel === 'undefined') {
        car.printModel = function() {
            console.log('This car model is: ', car.model)
        }
    }

    return car;
}

function Car(model) {
    this.model = model;

    this.createDoor = side => CarDoor(side, model);
    this.createHood = () => CarHood(model);
}

function CarDoor(side, model) {
    const build = () => { console.log(`Build a ${side} door for ${model}`) };

    return {
        build
    }
}

function CarHood(model) {
    const build = () => {
        console.log(`Build a hood for ${model}`);
    };

    return {
        build
    }
}


const panamera = new Car('Panamera');

panamera.createDoor('left').build();
panamera.createDoor('right').build();
panamera.createHood().build();

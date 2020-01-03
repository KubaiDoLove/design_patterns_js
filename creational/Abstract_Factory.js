const createCar = require("./Factory_Method");

//Зачем: Комбинирование Фактори методов, которые позволяют создавать те или иные типы используемых классов
function CarFactory() {
    this.createCar = model => createCar(model);
}

const factory = new CarFactory();

const panamera = factory.createCar('Panamera');

panamera.printModel();

panamera.createDoor('left').build();
panamera.createDoor('right').build();
panamera.createHood().build();

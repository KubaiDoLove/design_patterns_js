//Зачем: скрывать некоторые свойства и методы, которые должны использоваться только внутри своего класса

class ClassWithPrivates {
    #privateProperty;
    #privateMethod;

    constructor() {
        this.#privateProperty = "too private";
        this.#privateMethod = () => { console.log("prrr") };
    }

    getAllPrivates() {
        console.log(this.#privateProperty);
        this.#privateMethod();
    }
}

const classWithPrivates = new ClassWithPrivates();

classWithPrivates.getAllPrivates();

//Зачем: Represent an operation to be performed on the elements of an object structure.
// Visitor lets you define a new operation without changing the classes of the elements on which it operates.

const Employee = function (name, salary, vacation) {
    const self = this;

    this.accept = function (visitor) {
        visitor.visit(self);
    };

    this.getName = function () {
        return name;
    };

    this.getSalary = function () {
        return salary;
    };

    this.setSalary = function (sal) {
        salary = sal;
    };

    this.getVacation = function () {
        return vacation;
    };

    this.setVacation = function (vac) {
        vacation = vac;
    };
};


const ExtraSalary = function () {
    this.visit = function (emp) {
        emp.setSalary(emp.getSalary() * 1.1);
    };
};

const ExtraVacation = function () {
    this.visit = function (emp) {
        emp.setVacation(emp.getVacation() + 2);
    };
};

const employees = [
    new Employee("John", 10000, 10),
    new Employee("Mary", 20000, 21),
    new Employee("Boss", 250000, 51)
];

const visitorSalary = new ExtraSalary();
const visitorVacation = new ExtraVacation();

for (let i = 0, len = employees.length; i < len; i++) {
    const emp = employees[i];

    emp.accept(visitorSalary);
    emp.accept(visitorVacation);
    console.log(emp.getName() + ": $" + emp.getSalary() +
        " and " + emp.getVacation() + " vacation days");
}

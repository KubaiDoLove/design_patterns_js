const Task = function (name, description, finished, dueDate) {
    this.name = name;
    this.description = description;
    this.finished = finished;
    this.dueDate = dueDate;
};


//Зачем: создание апи для используемых классов(Js-пометка, возвращение this в методе необходимо, чтобы выстраивать цепь вызовов методов)
const TaskBuilder = function () {
    let name;
    let description;
    let finished = false;
    let dueDate;

    return {
        setName: function(newName) { name = newName; return this; },
        setDescription: function(newDescription) { description = newDescription; return this; },
        setFinished: function(isFinished) { finished = isFinished; return this; },
        setDueDate: function(newDueDate) { dueDate = newDueDate; return this; },
        build: () => new Task(name, description, finished, dueDate)
    }
};

let task = new TaskBuilder()
    .setName('New Task')
    .setDescription('Made with awesome builder')
    .setFinished(true)
    .setDueDate('tomorrow')
    .build();

console.log(task);

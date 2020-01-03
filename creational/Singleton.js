//Зачем: Используется для разных целей, создается единственный инстанс такого объекта
//и он рулит внутри себя, например, всем приложением, если используется как глобальный сторедж
//Дэн Абрамов посмотрел на него и такой: "Ух, какой же прекрасный Редакс у меня выдался, с ним я пойду покорять Фейсбук"

const Singleton = (function () {
    let instance;

    function createInstance() {
        return new Object("I'm a new instance");
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

instance1 === instance2 ? console.log("Синглтоны для пацанов") : console.log("Редакс для мужиков");

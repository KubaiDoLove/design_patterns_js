class GetMovie {
    constructor(id) {
        return this.resources.find(item => item.id === id);
    }

    get resources() {
        return [
            { id: 1, title: "Apocalypse Now" },
            { id: 2, title: "Die Hard" },
            { id: 3, title: "Big Lebowski" }
        ];
    }
}

module.exports = GetMovie;

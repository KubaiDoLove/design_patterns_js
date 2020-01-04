class FetchMusic {
    get resources() {
        return [
            { id: 1, title: "The Fragile" },
            { id: 2, title: "Aladdin Sane" },
            { id: 3, title: "OK Boomer" }
        ]
    }

    fetch(id) {
        return this.resources.find(item => item.id ===id);
    }
}

module.exports = FetchMusic;

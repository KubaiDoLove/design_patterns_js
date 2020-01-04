const FetchMusic = require("./FetchMusic");
const GetMovie = require("./GetMovie");
const getTvShow = require("./getTvShow");
const bookResources = require("./bookResources");
const types = require("./TypesEnum");

class CultureFacade {
    constructor(type) {
        this.type = type;
    }

    get(id) {
        switch (this.type) {

            case types.MUSIC: {
                return this._tryToReturn(this._findMusic, id);
            }

            case types.MOVIE: {
                return this._tryToReturn(this._findMovie, id);
            }

            case types.TV: {
                return this._tryToReturn(this._findTVShow, id);
            }

            case types.BOOK: {
                return this._tryToReturn(this._findBook, id);
            }

            default: {
                throw new Error("No type set!")
            }
        }
    }

    get _error() {
        return { status: 404, error: `No item with this id found` };
    }

    _tryToReturn(func, id) {
        const result = func.call(this, id);
        return new Promise((ok, err) => Boolean(result)
            ? ok(result)
            : err(this._error));
    }

    _findMusic(id) {
        const db = new FetchMusic();
        return db.fetch(id);
    }

    _findMovie(id) {
        return new GetMovie(id);
    }

    _findTVShow(id) {
        return getTvShow(id);
    }

    _findBook(id) {
        return bookResources.find(item => item.id === id);
    }

}

const music = new CultureFacade(types.MUSIC);

music.get(3)
    .then(data => { console.log(data) })
    .catch(error => { console.error(error) });

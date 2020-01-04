//Зачем Создание прокси для какого-либо объекта
// для контроля или расширения используемых свойств и методов данного объекта
//В нашем примере мы будем использовать прокси для кэширования

function GeoCoder() {

    this.getLatLng = function(address) {

        if (address === "Amsterdam") {
            return "52.3700° N, 4.8900° E";
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        } else if (address === "Paris") {
            return "48.8742° N, 2.3470° E";
        } else if (address === "Berlin") {
            return "52.5233° N, 13.4127° E";
        } else {
            return "";
        }
    };
}

function GeoProxy() {
    const geoCoder = new GeoCoder();
    const geoCache = {};

    return {
        getLatLng: function(address) {
            if (!geoCache[address]) {
                geoCache[address] = geoCoder.getLatLng(address);
            }
            console.log(address + ": " + geoCache[address]);
            return geoCache[address];
        },
        getCount: function() {
            let count = 0;
            for (let code in geoCache) count++;
            return count;
        }
    };
}

const geo = new GeoProxy();

geo.getLatLng("Paris");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("London");
geo.getLatLng("London");

console.log("Cache size: " + geo.getCount());


var map;

function loadMap() {
    require([
        "esri/map",
        "dojo/ready",
        "dojo/domReady!"
    ], function (map, ready) {
        ready(function () {

            map = new esri.Map("map", {
                basemap: "dark-gray-vector",
                center: [-111.98, 33.48],
                zoom: 10
            });
        });
    });
}

$(document).ready(function () {
    loadMap();
});
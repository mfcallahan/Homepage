var baseMap;
var kml;
var boundaryLayer;
var radarLayer;
var warningLayer;

function loadMap() {
    require([
        "esri/map",
        "esri/layers/FeatureLayer",
        "esri/dijit/HomeButton",
        "esri/layers/KMLLayer",
        "dojo/ready",
        "dojo/domReady!"
    ], function (map, FeatureLayer, HomeButton, KMLLayer, ready) {
        ready(function () {

            baseMap = new esri.Map("map", {
                basemap: "dark-gray-vector",
                center: [-98.58, 39.83],
                zoom: 3
            });            

            var home = new HomeButton({
                map: baseMap
            }, "homeButton");
            home.startup();

        });
    });
}

function addFeatureLayers() {
    require([
        "esri/map",
        "esri/layers/FeatureLayer",
        "dojo/on",
        "dojo/ready",
        "dojo/domReady!"
    ], function (map, FeatureLayer, on, ready) {
        ready(function () {

            boundaryLayer = new FeatureLayer("https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0");
            boundaryLayer.setOpacity(0.15);

            radarLayer = new esri.layers.ArcGISDynamicMapServiceLayer("https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer");
            radarLayer.setOpacity(0.6);

            //warningLayer = new esri.layers.ArcGISDynamicMapServiceLayer("https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/watch_warn_adv/MapServer/");
            //warningLayer.setOpacity(0.2);
            
            baseMap.addLayers([boundaryLayer, radarLayer]);
            //baseMap.addLayer(radarLayer);

            baseMap.on("extent-change", function (evt) {
                if (evt.lod.level > 6) {
                    boundaryLayer.setVisibility(false);
                    radarLayer.setOpacity(0.3);
                }
                else {
                    boundaryLayer.setVisibility(true);
                    radarLayer.setOpacity(0.5);
                }
            });
        });
    });
}

function addKmlLayers() {
    require([
        "esri/map",
        "esri/layers/KMLLayer",
        "dojo/parser",
        "dojo/dom-style",
        "dijit/layout/BorderContainer",
        "dijit/layout/ContentPane",
        "dojo/domReady!"
    ], function (map, KMLLayer, parser, domStyle) {

        parser.parse();

        var kmlUrl = "http://localhost.mfcallahan.com/Content/map/PapagoPts.kml";
        kml = new KMLLayer(kmlUrl);
        map.addLayer(kml);
        kml.on("load", function () {
            domStyle.set("loading", "display", "none");
        });

    });
}

$(document).ready(function () {
    loadMap();
    addFeatureLayers();
    //addKmlLayers();
});
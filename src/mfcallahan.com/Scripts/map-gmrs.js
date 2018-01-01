var gmrsMap;

function GetRepeaters() {

    var success = function (result) {
        debugger;
        
    };

    var error = function (result) {
        debugger;
        
    };

    debugger;
    $.ajax({
        url: window.location.origin + "/Map/GetGmrsRepeaters",
        type: "POST",
        success: success,
        error: error,
        cache: false,
        contentType: false,
        processData: false
    });
}

function SetupMap() {
    
    GetRepeaters();

    gmrsMap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(gmrsMap);
}




$(document).ready(function () {
    SetupMap();
});

$(document).ready(main);

var map;

function main() {
    map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -5
    });
    
    var bounds = [[0,0], [660, 1020]];
    var image = L.imageOverlay('images/Sword-Coast-Map_HighRes.jpg', bounds)
                .addTo(map);

    map.fitBounds(bounds);


    map.setView( [500, 400], 1);

}

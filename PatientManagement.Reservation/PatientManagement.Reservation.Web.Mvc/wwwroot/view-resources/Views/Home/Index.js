
google.maps.event.addDomListener(window, 'load', init);
function init() {
    var locations = [
        [40.6128, -73.9976, "images/pin-apartment.png", "estate-details-right-sidebar.html", "images/infobox-offer1.jpg", "Fort Collins, Colorado 80523, USA", "$320 000"],
        [40.6128, -73.9976, "images/pin-apartment.png", "estate-details-right-sidebar.html", "images/infobox-offer7.jpg", "Fort Collins, Colorado 80523, USA", "$330 000"],
        [40.6128, -73.9976, "images/pin-apartment.png", "estate-details-right-sidebar.html", "images/infobox-offer3.jpg", "Fort Collins, Colorado 80523, USA", "$310 000"],
        [40.7222, -73.7903, "images/pin-commercial.png", "estate-details-right-sidebar.html", "images/infobox-offer2.jpg", "West Fourth Street, New York 10003, USA", "$350 000"],
        [41.0306, -73.7669, "images/pin-house.png", "estate-details-right-sidebar.html", "images/infobox-offer3.jpg", "E. Elwood St. Phoenix, AZ 85034, USA", "$300 000"],
        [41.3006, -72.9440, "images/pin-apartment.png", "estate-details-right-sidebar.html", "images/infobox-offer4.jpg", "Fort Collins, Colorado 80523, USA", "$410 000"],
        [42.2418, -74.3626, "images/pin-land.png", "estate-details-right-sidebar.html", "images/infobox-offer5.jpg", "West Fourth Street, New York 10003, USA", "$295 000"],
        [38.8974, -77.0365, "images/pin-house.png", "estate-details-right-sidebar.html", "images/infobox-offer6.jpg", "E. Elwood St. Phoenix, AZ 85034, USA", "$390 600"],
        [38.7860, -77.0129, "images/pin-apartment.png", "estate-details-right-sidebar.html", "images/infobox-offer7.jpg", "Fort Collins, Colorado 80523, USA", "$299 000"],
        [41.2693, -70.0874, "images/pin-house.png", "estate-details-right-sidebar.html", "images/infobox-offer8.jpg", "Fort Collins, Colorado 80523, USA", "$600 000"],
        [33.7544, -84.3857, "images/pin-commercial.png", "estate-details-right-sidebar.html", "images/infobox-offer9.jpg", "West Fourth Street, New York 10003, USA", "$350 000"],
        [33.7337, -84.4443, "images/pin-house.png", "estate-details-right-sidebar.html", "images/infobox-offer10.jpg", "E. Elwood St. Phoenix, AZ 85034, USA", "$550 000"],
        [33.8588, -84.4858, "images/pin-land.png", "estate-details-right-sidebar.html", "images/infobox-offer1.jpg", "E. Elwood St. Phoenix, AZ 85034, USA", "$670 000"],
        [34.0254, -84.3560, "images/pin-commercial.png", "estate-details-right-sidebar.html", "images/infobox-offer5.jpg", "E. Elwood St. Phoenix, AZ 85034, USA", "$300 000"],
        [39.6282, -86.1320, "images/pin-apartment.png", "estate-details-right-sidebar.html", "images/infobox-offer6.jpg", "E. Elwood St. Phoenix, AZ 85034, USA", "$390 600"],
        [40.5521, -84.5658, "images/pin-apartment.png", "estate-details-right-sidebar.html", "images/infobox-offer2.jpg", "West Fourth Street, New York 10003, USA", "$350 000"],
        [41.6926, -87.6021, "images/pin-house.png", "estate-details-right-sidebar.html", "images/infobox-offer5.jpg", "E. Elwood St. Phoenix, AZ 85034, USA", "$300 000"]
    ];

    offersMapInit("offers-map", locations);
    mapInit(40.6128, -73.7903, "featured-map1", "images/pin-house.png", false);
    mapInit(40.7222, -73.7903, "featured-map2", "images/pin-apartment.png", false);
    mapInit(41.0306, -73.7669, "featured-map3", "images/pin-land.png", false);
    mapInit(41.3006, -72.9440, "featured-map4", "images/pin-commercial.png", false);
    mapInit(42.2418, -74.3626, "featured-map5", "images/pin-house.png", false);
    mapInit(38.8974, -77.0365, "featured-map6", "images/pin-apartment.png", false);
    mapInit(38.7860, -77.0129, "featured-map7", "images/pin-house.png", false);

    mapInit(41.2693, -70.0874, "grid-map1", "images/pin-house.png", false);
    mapInit(33.7544, -84.3857, "grid-map2", "images/pin-apartment.png", false);
    mapInit(33.7337, -84.4443, "grid-map3", "images/pin-land.png", false);
    mapInit(33.8588, -84.4858, "grid-map4", "images/pin-commercial.png", false);
    mapInit(34.0254, -84.3560, "grid-map5", "images/pin-apartment.png", false);
    mapInit(40.6128, -73.9976, "grid-map6", "images/pin-house.png", false);
};
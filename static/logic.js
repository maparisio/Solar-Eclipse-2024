//// Solar Eclipse 2024 ////
// Specify the dataset we want to work with and store it in a variable called queryURL
// This section commented out for the weather API if we use that.

//const queryURL = "http of the weather API here";  <-----------

// Perform a GET request to the query URL passing a variable function to display the map
//d3.json(queryURL).then(function(data) {
    //createFeatures(data.features);
//});

/////////////////////////////////////////////////////////////////////////////////////////////////

// Define your layers
// Define partial_eclipse layer
/////////////////////////////////////////////////////////////////////////////////////////////////

// Create a function to kick start your map. It can take any two arguments that you can reference
// later on when using the function. 
function createMap(partial_eclipse, total_eclipse) {
    // Add tile layers to the map
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    // Create baseMaps object
    let baseMaps = {
        "Street View": street,
        "Topography View": topo
    };

    // Create overlay object
    let overlayMaps = {
        Partial: partial_eclipse,
        Total: total_eclipse
    };

    // Create the map with the div and store it in a variable to use later
    let myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5,
        layers: [street]
    });

    // Create a layer control to pass the baseMaps and overlayMaps
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);
} // End of createMap() function

/////////////////////////////////////////////////////////////////////////////////////////////////
// Function to create circle markers for GeoJSON features
function createCircleMarkers(layer, color) {  // When using the function, you will write the color as 2nd argument
    return L.geoJson(layer, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 1, // Adjust the radius as needed. Was at 5. Changed it to 1 for smaller circles
                color: color // Circle marker color
            });
        }
    });
}  // End of the createCircleMarkers() function

/////////////////////////////////////////////////////////////////////////////////////////////////

// Get the information from the geojson files so we can pass it in the createCircleMarkers() function
// Fetch GeoJSON data for PARTIAL ECLIPSE. Use the createCircleMarkers() we created
fetch('static/Cities_Outside_Totality.geojson')
    .then(response => response.json())
    .then(data => {
        let partial_eclipse_layer = createCircleMarkers(data, 'blue'); // Create circle markers for partial eclipse

        // Define TOTAL ECLIPSE layer inside the first fetch block. Use the createCircleMarkers() we created
        fetch('static/Eclipse_Cities_Totality.geojson')
            .then(response => response.json())
            .then(total_data => {
                let total_eclipse_layer = createCircleMarkers(total_data, 'navy'); // Create circle markers for total eclipse

                // Pass both GeoJSON layers to the createMap function we created
                createMap(partial_eclipse_layer, total_eclipse_layer);
            });
    }); // End of GeoJSON fetch method

    /////////////////////////////////////////////////////////////////////////////////////////////////

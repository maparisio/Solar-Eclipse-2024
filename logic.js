//// Solar Eclipse 2024 ////
// Specify the dataset we want to work with and store it in a variable called queryURL
// This section commented out for the weather API if we use that.

//const queryURL = "http of the weather API here";  <-----------

// Perform a GET request to the query URL passing a variable function to display the map
//d3.json(queryURL).then(function(data) {
    //createFeatures(data.features);
//});


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////       Total Solar Eclipse 2024       //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

// Create a function to kick start your map. It can take any two arguments that you can reference
// later on when using the function.

function createMap(partial_eclipse, total_eclipse) {
    // Add tile layers to the map
    // Add the street layer
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    // Add the topography layer
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
        Partial: partial_eclipse,  // Key-Values that will display in the overlay object
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
        collapsed: false  // If you wanted the layer control to collapse you will pass a 'true' value
    }).addTo(myMap);
}// End of createMap() function


//////////////////////////////////////////////////////////////////////////////////////////////////
// Function to create circle markers for GeoJSON features
// Note we are passing 4 arguments; layer, color, isPartial, bindPopup
// isPartial; in regards to radius for the partial_eclipse, as we only want to reflect the duration as radius on the total_eclipse overlayMap
// bindPopup; in regards to there being a bindPopup with information only on the markers of the total_eclipse overlayMap

function createCircleMarkers(layer, color, isPartial, bindPopup) {
    return L.geoJson(layer, {
        pointToLayer: function (feature, latlng) {
            // Calculate the duration of the eclipse with the function we created further down the code
            // Note that the duration will return in milliseconds due to the data, thus we have to make the radius way smaller
            const duration = calculateDuration(feature.properties.Start_Total, feature.properties.End_Total);
            
            // Set radius based on eclipse type and store it in a variable called 'radius'
            let radius;
            if (isPartial) {
                radius = 1; // Constant radius for partial eclipse
            } else {
                // Convert duration to MM:SS format and store as the radius for the total_eclipse layer
                radius = duration / 60000; // If we do an equivalence of milliseconds represented by a kilometer
            }

            // Create a circle marker with the calculated radius
            const circMarker = L.circleMarker(latlng, {
                radius: radius, // The correct radius will display due to the if statement above
                color: color,
                fillColor: color,
                fillOpacity: 0.5
            });

            // Bind popup that will initiate only for the total_eclipse layer
            if (bindPopup) {
                circMarker.bindPopup(bindPopup(feature));
            }

            return circMarker;
        } // End of pointToLayer
    }); // End of L.geoJson method
}  // End of the createCircleMarkers() function

/////////////////////////////////////////////////////////////////////////////////////////////////
// Get the information from the geojson files so we can pass it in the createCircleMarkers() function
// Note that we are fetching information from two different geojson files

// Fetch GeoJSON data for PARTIAL ECLIPSE. Use the createCircleMarkers() we created
fetch('static/Cities_Outside_Totality.geojson')
    .then(response => response.json())
    .then(data => {
        let partial_eclipse_layer = createCircleMarkers(data, 'blue', true); // Create circle markers for partial eclipse, 
        // because it 'isPartial', it is set to true. No bindPopup parameter is passed, due to not applying it to this layer

        // Fetch GeoJSON data for TOTAL ECLIPSE. Define TOTAL ECLIPSE layer inside the fetch block.
        fetch('static/Eclipse_Cities_Totality.geojson')
            .then(response => response.json())
            .then(total_data => {
                // Define a function to generate bindPopup content for total eclipse markers
                function totalEclipsePopup(feature) {
                    // Use the calculateDurationMMSS function created further down the code
                    const duration = calculateDurationMMSS(feature.properties.Start_Total, feature.properties.End_Total);
                    // The NAME key stores the city, and duration is the variable created above
                    return `<center><h3>City: ${feature.properties.NAME}, ${feature.properties.STATE}</h3><hr>
                            <p>Total Eclipse Duration: ${duration} minutes</p></center>`;
                }
                // Use the createCircleMarkers() we created. The parameter 'isPartial' is false, 
                // because this one is not the partial_eclipse overlay, the radius is our duration.
                // We use the totalEclipsePopup as the bindPopup parameter, as we are using it for this layer
                let total_eclipse_layer = createCircleMarkers(total_data, '#000033', false, totalEclipsePopup); 

                // Pass both GeoJSON layers to the createMap function we created at the beginning of the code
                createMap(partial_eclipse_layer, total_eclipse_layer);
            }); 
    }); // End of GeoJSON fetch method that started with the PARTIAL ECLIPSE

/////////////////////////////////////////////////////////////////////////////////////////////////
// Function to calculate the duration of the eclipse in milliseconds
// Takes two parameteres, for the calculation, a start point and an end point
// This function is used in the createCircleMarkers() function for the duration variable
// If you use the calculateDurationMMSS instead of this one, markers won't display in the map

function calculateDuration(start, end) {
    const startTime = new Date(start);
    const endTime = new Date(end);
    return endTime - startTime; // Difference is in milliseconds
}  // End of calculateDuration Function

/////////////////////////////////////////////////////////////////////////////////////////////////
// Function to calculate the duration of the eclipse in minutes and seconds
// This function is used in the duration variable within the fetch() method for the totalEclipsePopup() function
// It transforms the calculation of the time, into the desired format which is MM:SS

function calculateDurationMMSS(start, end) {
    const startTime = new Date(start);
    const endTime = new Date(end);
    const durationMilliseconds = endTime - startTime;
    const minutes = Math.floor(durationMilliseconds / 60000); // 1 minute = 60000 milliseconds
    const seconds = ((durationMilliseconds % 60000) / 1000).toFixed(0); // Extract seconds
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds; // Display format MM:SS
} // End of calculateDurationInMintuesAndSeconds function

///////////////////////////////////////////////////////////////////////////////////////////////////

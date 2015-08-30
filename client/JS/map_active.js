google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 2,
                    draggable: false,
                    scrollwheel: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var coordinates = [37.354107, -121.9552386, 37.427475, -122.169719, 42.453449, -76.473503, 33.424240, -111.928053, 43.076592, -89.412487, 42.350500, -71.105399, 41.826772, -71.402548, 38.936845, -77.090877, 38.986918, -76.942554, 51.756634, -1.254704, 51.498800, -0.174877, 55.711948, 13.203493, 1.296643, 103.776394];

                 teamlabels = ['Santa Clara University: $820', 'Stanford University: $2700', 'State University of New York: $650', 'Arizona State University: $1170', 'University of Wisconsin-Madison: $1670', 'University of Boston: $790', 'College Hill: $500', 'Northwestern University: $750', 'University of Maryland at College Part: $1300', 'University of Oxford: $670', 'Imperial College: $800', 'Lund University: $ 750', 'National University of Singapore: $ 500'];

                var i = 0;
                for( var j = 0; j < coordinates.length-1; j = j+2)
                {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(coordinates[j], coordinates[j+1]),
                        map: map,
                        title: teamlabels[i]
                    });
                    i++;
                }
                //Marker code starts here
                var flightPlanCoordinates = [
                
                    {lat: 35.907757, lng: 127.766922},
                    {lat: 40.339852, lng: 127.510093},
                    {lat: 37.772, lng: -122.214},
                    
                    ];
              var flightPath = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
              });

              flightPath.setMap(map);
              //Marker code ends here

            }
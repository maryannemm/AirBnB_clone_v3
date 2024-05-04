$(document).ready(function() {
    // Function to check API status
    function checkApiStatus() {
        $.ajax({
            type: 'GET',
            url: 'http://0.0.0.0:5001/api/v1/status/',
            success: function(response) {
                if (response.status === 'OK') {
                    $('#api_status').addClass('available');
                } else {
                    $('#api_status').removeClass('available');
                }
            },
            error: function() {
                $('#api_status').removeClass('available');
            }
        });
    }

    // Call the function initially
    checkApiStatus();

    // Call the function every 10 seconds
    setInterval(checkApiStatus, 10000);

    // Function to fetch places
    function fetchPlaces() {
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search',
            contentType: 'application/json',
            data: JSON.stringify({}),
            success: function(response) {
                // Loop through the result and create article tags for each place
                response.forEach(function(place) {
                    var article = '<article>' +
                                      '<div class="title_box">' +
                                          '<h2>' + place.name + '</h2>' +
                                          '<div class="price_by_night">' + place.price_by_night + '</div>' +
                                      '</div>' +
                                      '<div class="information">' +
                                          '<div class="max_guest">' + place.max_guest + ' Guests</div>' +
                                          '<div class="number_rooms">' + place.number_rooms + ' Rooms</div>' +
                                          '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathrooms</div>' +
                                      '</div>' +
                                      '<div class="description">' + place.description + '</div>' +
                                  '</article>';
                    $('.places').append(article);
                });
            },
            error: function() {
                console.log('Error fetching places.');
            }
        });
    }

    // Call the function to fetch places
    fetchPlaces();
});


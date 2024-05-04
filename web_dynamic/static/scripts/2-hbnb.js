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
});


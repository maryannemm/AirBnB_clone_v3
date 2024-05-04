$(document).ready(function() {
    // Dictionary to store selected amenities
    var selectedAmenities = {};

    // Listen for changes on input checkbox tags
    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            // If checkbox is checked, store the Amenity ID
            selectedAmenities[amenityId] = amenityName;
        } else {
            // If checkbox is unchecked, remove the Amenity ID
            delete selectedAmenities[amenityId];
        }

        // Update the h4 tag inside the div Amenities with the list of selected Amenities
        var selectedAmenitiesList = Object.values(selectedAmenities).join(', ');
        $('#selected-amenities').text(selectedAmenitiesList);
    });
});


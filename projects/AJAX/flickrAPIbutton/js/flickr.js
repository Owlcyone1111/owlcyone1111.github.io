$(document).ready(function() {
  $('button').click(function() {
    $("button").removeClass("selected");
    $(this).addClass("selected");
    
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    }
    // data is JSON data (string parsed into JavaScript) returned by jQuery
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      // jQuery method to loop through each item and apply callback function on
      $.each(data.items, function(i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    // URL, data, callback function
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  });
});
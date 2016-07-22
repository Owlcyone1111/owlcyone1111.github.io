function Song(title, artist, duration) {
  var song = this;
  // Song is a Media, Media takes care of title and duration, Song just artist
  Media.call(song, title, duration); // Can call any method with call, first argument tells what to use as the method's "this"
  this.artist = artist;
}

// Copies references to the Media prototype properties and methods to the Song prototype (down the chain)
Song.prototype = Object.create(Media.prototype); // Prototype chain (inheritance)

Song.prototype.toHTML = function() {
  var htmlString = '<li';
  if (this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};
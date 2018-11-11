// google map
var locations = [
  ['World Trade Center', 40.7133182, -74.0132534, 4],
  ['Theatre Museum', 40.7168911, -74.0088807, 5],
  ['Brooklyn Boulders', 40.6787815, -73.9828174, 3],
  ['St. Teresa', 40.6122082, -74.1203129, 2],
  ['Walmart', 40.6836081, -74.304604, 1]
];
var map;
var markers = [];

function init(){
  map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 10,
    center: new google.maps.LatLng(40.6584112, -74.0664692),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var num_markers = locations.length;
  for (var i = 0; i < num_markers; i++) {  
    markers[i] = new google.maps.Marker({
      position: {lat:locations[i][1], lng:locations[i][2]},
      map: map,
      html: locations[i][0],
      id: i,
    });
      
    google.maps.event.addListener(markers[i], 'click', function(){
      var infowindow = new google.maps.InfoWindow({
        id: this.id,
        content:this.html,
        position:this.getPosition()
      });
      google.maps.event.addListenerOnce(infowindow, 'closeclick', function(){
        markers[this.id].setVisible(true);
      });
      this.setVisible(false);
      infowindow.open(map);
    });
  }
}

init();
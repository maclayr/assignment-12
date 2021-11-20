var mymap = L.map('main_map').setView([35.204, -80.864], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/light-v10',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibWFjbGF5ciIsImEiOiJja3czcmR2MGowOWh0Mm9vODBuY3A0MDgyIn0.MSVeSEwFEnuEEI7Z3pO4Ew'
}).addTo(mymap);

var polyline = L.polyline(latlngs).addTo(mymap);

for (let i = 0; i < places.length; i++) {
  L.marker ( [ places[i].latitude, places[i].longitude ] )
  .bindPopup ( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
  .addTo( mymap );
}

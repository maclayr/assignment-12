var mymap = L.map('railTrail_map').setView([35.204, -80.864], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/light-v10',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibWFjbGF5ciIsImEiOiJja3czcmR2MGowOWh0Mm9vODBuY3A0MDgyIn0.MSVeSEwFEnuEEI7Z3pO4Ew'
}).addTo(mymap);

var polyline = L.polyline(latlngs).addTo(mymap);

var circle = L.circle([35.20748385793186, -80.86549126476281], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 160.934
}).addTo(mymap);

var marker1 = L.marker([35.20748385793186, -80.86549126476281]).addTo(mymap);
var marker2 = L.marker([35.21339325599912, -80.85853130779581]).addTo(mymap);
var marker3 = L.marker([35.21186224084088, -80.86150057981177]).addTo(mymap);
var marker4 = L.marker([35.20109164233384, -80.86711222340199]).addTo(mymap);


marker1.bindPopup("<b>Hub South End Apartments</b><br>$1,460");
marker2.bindPopup("<b>Camden Gallery Apartments</b><br>$1,460");
marker3.bindPopup("<b>Hawk Apartments</b><br>$1,460");
marker4.bindPopup("<b>MAA Reserve</b><br>$1,460");

var popup = L.popup();

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.print('Walking east one step');
}

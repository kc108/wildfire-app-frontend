const options = {
  // Required: API key
  key: "DNKpvVlFaAtFK7UNrNMO0ajabuOQFvRt", // REPLACE WITH YOUR KEY !!!
  // Put additional console output
  verbose: true,
  // Optional: Initial state of the map
  lat: 38.4,
  lon: -122.7,
  zoom: 5,
};
// Initialize Windy API
windyInit(options, (windyAPI) => {
  // windyAPI is ready, and contain 'map', 'store',
  // 'picker' and other usefull stuff
  const { map } = windyAPI;
  // .map is instance of Leaflet map
  L.popup()
    .setLatLng([38.4, -122.7])
    .setContent("Save searches below")
    .openOn(map);
});

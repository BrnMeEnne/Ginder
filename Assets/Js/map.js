mapboxgl.accessToken = 'pk.eyJ1IjoibmF0ZXNzcyIsImEiOiJjbTY4MzY2YTIwOXU2MmpzODExYWtqeGp2In0._0ihRiPeylkSliVZdKyLDA';

// Inizializziamo la mappa
const map = new mapboxgl.Map({
  container: 'map', // ID del div
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [12.496366, 41.902782], // [long, lat] - Roma come esempio
  zoom: 5
});

// Aggiungiamo un controllo di navigazione (zoom e rotazione)
map.addControl(new mapboxgl.NavigationControl());

 // Recuperiamo l'elemento <input id="geolocation">
 const geoInput = document.getElementById('geolocation');

// Aggiungiamo un listener per l'evento "change" (o "blur"/"keypress" a scelta)
geoInput.addEventListener('change', async () => {
const address = geoInput.value.trim();
if (!address) return; // Se l'input è vuoto, non facciamo nulla

// Chiamiamo la Geocoding API di Mapbox
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxgl.accessToken}`;

try {
  const response = await fetch(url);
  const data = await response.json();

  // Se troviamo almeno un risultato valido
  if (data.features && data.features.length > 0) {
    // La prima feature in genere è la più rilevante
    const [lng, lat] = data.features[0].center;

    // Centriamo la mappa
    map.setCenter([lng, lat]);
    map.setZoom(14);

    // Opzionale: aggiungere un marker sul risultato
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
  } else {
    console.log('Nessun risultato trovato per', address);
  }
} catch (error) {
  console.error('Errore nella richiesta di geocoding:', error);
}
});
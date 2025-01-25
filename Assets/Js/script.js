searchBtn.addEventListener('click', () => {
    // Recupera i valori dei filtri
    const selectedGame = gamePreference.value;
    const selectedDate = availability.value;
    const selectedLocation = geolocation.value;

    // Salva i dati nel Local Storage
    localStorage.setItem('searchFilters', JSON.stringify({
        game: selectedGame,
        date: selectedDate,
        location: selectedLocation
    }));

    // Reindirizza alla pagina collegata
    window.location.href = 'results.html';
});
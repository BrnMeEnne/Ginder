// Recupera i dati dal Local Storage
const searchFilters = JSON.parse(localStorage.getItem('searchFilters'));

// Mostra i risultati nella pagina
const resultsSection = document.getElementById('results');

if (searchFilters) {
    resultsSection.innerHTML = `
        <p><strong>Game Preference:</strong> ${searchFilters.game || 'Any'}</p>
        <p><strong>Availability:</strong> ${searchFilters.date || 'Anytime'}</p>
        <p><strong>Location:</strong> ${searchFilters.location || 'Anywhere'}</p>
    `;
} else {
    resultsSection.innerHTML = `<p>No filters were applied.</p>`;
}
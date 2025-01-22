const profiles = [
    { name: "Alice", game: "Dungeons & Dragons", location: "New York", avatar: "https://via.placeholder.com/100" },
    { name: "Bob", game: "Pathfinder", location: "Los Angeles", avatar: "https://via.placeholder.com/100" },
    { name: "Charlie", game: "Starfinder", location: "Chicago", avatar: "https://via.placeholder.com/100" }
];

const profileList = document.getElementById("profile-list");

function displayProfiles() {
    profileList.innerHTML = "";
    profiles.forEach(profile => {
        const profileCard = document.createElement("div");
        profileCard.classList.add("profile-card");
        profileCard.innerHTML = 
            <img src="${profile.avatar}" alt="Avatar">
            <h3>${profile.name}</h3>
            <p>${profile.game}</p>
            <p>${profile.location}</p>
        ;
        profileList.appendChild(profileCard);
    });
}

document.getElementById("search-btn").addEventListener("click", () => {
    // Implement filter functionality here based on selected filters
    displayProfiles();
});

displayProfiles();
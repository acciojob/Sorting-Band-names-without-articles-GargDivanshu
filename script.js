// Array of band names
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles ('a', 'an', 'the') from the start of a string
function strip(name) {
    return name.replace(/^(a |the |an )/i, '').trim();
}

// Sorting the array based on the band name without articles
touristSpots.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Getting the 'ul' element by its ID
const bandsList = document.getElementById('bands');

// Creating 'li' elements for each sorted band name and appending them to the 'ul'
touristSpots.forEach(spot => {
    const li = document.createElement('li');
    li.textContent = spot;
    bandsList.appendChild(li);
});

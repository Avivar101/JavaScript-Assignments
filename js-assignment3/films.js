let film = []

fetch('https://swapi.co/api/films/')
    .then(
        function(a) {
            a.json().then(function(data) {
                film = data.results;
    }); 
});

let filmHtml = ''

function buildFilmHtml(item) {
    return `
        <ul id="films">
            <h1>STAR WARS: EPISODE ${item.episode_id}</h1>
            <h2>${item.title}</h2>
            <li>Released: ${item.release_date}</li>
            <li>${item.opening_crawl}</li>
            <li>Directed by: ${item.director}</li>
            <li>Produced by: ${item.producer}</li>
        </ul> 
    `
}

for (item of film) {
    filmHtml = filmHtml + buildFilmHtml(item)
}

document.querySelector('#film-list').innerHTML = filmHtml
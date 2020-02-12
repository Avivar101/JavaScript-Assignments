// This area is a placeholder for fetch-data; each fetch will later be sent to individual script files in the future

const characters = 'https://swapi.co/api/people/';
let character = [];

const species = 'https://swapi.co/api/species/';
let specie = [];

const vehicles = 'https://swapi.co/api/vehicles/';
let vehicle = [];

const starships = 'https://swapi.co/api/starships/';
let starship = [];

const planets = 'https://swapi.co/api/planets/';
let planet = [];

fetch(characters).then(function(a) {
    a.json().then(function(data) {
        character = data.results;
    });
});

fetch(species).then(function(a) {
    a.json().then(function(data) {
        specie = data.results;
    });
});

fetch(vehicles).then(function(a) {
    a.json().then(function(data) {
        vehicle = data.results;
    });
});

fetch(starships).then(function(a) {
    a.json().then(function(data) {
        starship = data.results;
    });
});

fetch(planets).then(function(a) {
    a.json().then(function(data) {
        planet = data.results;
    });
});

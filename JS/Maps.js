// URL da API Valorant para buscar informações sobre os mapas
// const apiUrl = 'https://valorant-api.com/v1/maps';

// Aqui vamos usar a fetch API para buscar os dados da API
const urlBase = 'https://valorant-api.com/v1';
const page = 1;

const loadMaps = async () => {
    const res = await fetch(`${urlBase}/maps?page=${page}`);
    return await res.json();
};

const loadAllWithPromiseAll = async () => {
    const maps = await loadMaps();
    console.log('Mapas: ', maps.data);
    showMaps(maps.data);
};

loadAllWithPromiseAll();

function showMaps(maps){
    const mapsContainer = document.getElementById('maps-container');
    maps.forEach(map => {
        const divMap = document.createElement('div');
        divMap.classList.add('map-box');
        divMap.innerHTML = `
            <h2>${map.name}</h2>
            <p>${map.description}</p>
            <img src="${map.splash}" alt="${map.name}">
        `;
        mapsContainer.appendChild(divMap);
    });
};

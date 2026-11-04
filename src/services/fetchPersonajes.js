const API_URL = "https://rickandmortyapi.com/api/character";
export const fetchPersonajes = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("No se pudo obtener la lista de personajes");
    }
    const data = await response.json();
    return data.results;
};
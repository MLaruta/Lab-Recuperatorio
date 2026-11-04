import { useState } from "react";
import { usePersonajes } from "./Hooks/usePersonajes";
import { PersonajeList } from "./componentes/PersonajeList";
import { FavoritesPanel } from "./componentes/favoritesPanel";
export const Multiverso = () => {
    const { personajes, loading, error } = usePersonajes();
    const [favoritos, setFavoritos] = useState([]);
    const handleToggleFavorite = (personaje) => {
        setFavoritos((prevFavoritos) => {
            const existe = prevFavoritos.some((fav) => fav.id === personaje.id);
            if (existe) {
                return prevFavoritos.filter((fav) => fav.id !== personaje.id);
            } else {
                return [...prevFavoritos, personaje];
            }
        });
    };
    return (
        <div className="container" style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>Multiverso de Rick and Morty</h1>
            <div className="main-content" style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                <div style={{ flex: 3 }}>
                    {loading ? (
                        <p>Cargando Personajes...</p>
                    ) : error ? (
                        <p>Error al cargar los personajes.</p>
                    ) : (
                        <PersonajeList 
                            personajes={personajes}
                            favoritos={favoritos}
                            onToggleFavorite={handleToggleFavorite}
                        />
                    )}
                </div>
                <div style={{ flex: 1 }}>
                    <FavoritesPanel 
                        favoritos={favoritos}
                        onToggleFavorite={handleToggleFavorite}
                    />
                </div>
            </div>
        </div>
    );
};
export default Multiverso;
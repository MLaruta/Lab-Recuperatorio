import { PersonajeCard } from "./PersonajeCard";

export const PersonajeList = ({ personajes, favoritos, onToggleFavorite }) => {
    return (
        <div className="personaje-list">
            {personajes.map((personaje) => {
                const isFavorite = favoritos.some((fav) => fav.id === personaje.id);
                return (
                    <PersonajeCard
                        key={personaje.id}
                        personaje={personaje}
                        isFavorite={isFavorite}
                        onToggleFavorite={onToggleFavorite}
                    />
                );
            })}
        </div>
    );
};
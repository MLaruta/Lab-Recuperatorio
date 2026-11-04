export const PersonajeCard = ({ personaje, isFavorite, onToggleFavorite }) => {
    const { name, status, image } = personaje;
    const statusClass = `estado-${status.toLowerCase()}`;
    
    return (
        <div className={`card ${isFavorite ? "fav" : ""}`}>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p className={`estado ${statusClass}`}>{status}</p>
            <button onClick={() => onToggleFavorite(personaje)} className="btn-animado">
                {isFavorite ? "Quitar de Favs" : "Agregar a Favs"}
            </button>
        </div>
    );
};
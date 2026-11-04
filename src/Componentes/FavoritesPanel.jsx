export const FavoritesPanel = ({ favoritos, onToggleFavorite }) => {
    return (
        <div className="favorites-panel" 
            style={{ 
                background: "#fff", 
                padding: "16px", 
                borderRadius: "12px", 
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)" 
            }}>
            <h3 style={{ marginBottom: "15px", fontSize: "18px" }}>
                Favoritos ({favoritos.length})
            </h3>
            
            {favoritos.length === 0 ? (
                <p style={{ color: "#666", fontSize: "14px" }}>No hay favoritos aún.</p>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {favoritos.map((personaje) => (
                        <div key={personaje.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <img 
                                    src={personaje.image} 
                                    alt={personaje.name} 
                                    style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }} 
                                />
                                <span style={{ fontSize: "14px", fontWeight: "500" }}>{personaje.name}</span>
                            </div>
                            <button 
                                onClick={() => onToggleFavorite(personaje)}
                                style={{ 
                                    background: "#4A6CF7", 
                                    color: "#fff", 
                                    border: "none", 
                                    padding: "6px 12px", 
                                    borderRadius: "6px", 
                                    cursor: "pointer", 
                                    fontSize: "13px" 
                                }}
                            >
                                Quitar
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
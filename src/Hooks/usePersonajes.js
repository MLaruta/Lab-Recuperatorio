import { useState, useEffect } from "react";
export const usePersonajes = () => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((res) =>res.json())
            .then((data) => {
                setPersonajes(data.results)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err);
                setError(true);
                setLoading(false);
            });
    }, []);
    return { personajes ,loading, error};
};
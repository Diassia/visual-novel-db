export const joinedGenre = (data) => {
    const genreString = data.map(e => {
            return e[0].toUpperCase() + e.substring(1);
        }).join(", ");
    
    return genreString;
}
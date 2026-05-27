const storageKey = "favoriteBooks";

export function getFavorites() {
    const favoritesData = JSON.parse(localStorage.getItem(storageKey)) || [];
    return favoritesData;
}

export function saveFavorites(favoriteBooks) {
    localStorage.setItem(storageKey, JSON.stringify(favoriteBooks));
}    

export function addFavorite(book){
    const favoritesData = getFavorites();
    const exists = favoritesData.some(fav => fav.id === book.id);
    if (!exists) {
        favoritesData.push(book);
        saveFavorites(favoritesData);
        alert(`${book.title} has been added to your favorites!`);
    } else {
        alert(`${book.title} is already in your favorites!`);
    }
}

export function removeFavorite(bookId) {
    const favoritesData = getFavorites();
    const updatedFavorites = favoritesData.filter(book => book.id !== bookId);

    saveFavorites(updatedFavorites);
}    

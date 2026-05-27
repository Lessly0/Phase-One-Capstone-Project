import {
    getFavorites,
    addFavorite,
    removeFavorite
} from "./favorites.js";

const booksgrid= document.getElementById('books-grid');
const favoritesgrid= document.getElementById('favorites-grid');

// const booksData = [
//     { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'},
//     { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee'},
//     { id: 3, title: '1984',author: 'George Orwell'},
//     { id: 4, title: '1985',author: 'Georges Orwelln'},

// ];

import { fetchData } from "./fetch.js";

function showBooks(){
    booksgrid.innerHTML ="";
    booksData.forEach(book => {
        booksgrid.innerHTML += `
        <div class="bg-white p-4 rounded-xl shadow-xl text-black">
            <img src="#" alt="${book.title}" class="w-full h-52 object-cover rounded-t-xl border-2 border-gray-800">
            <h3 class="font-bold">${book.title}</h3>
            <p>By:${book.author}</p>

            <button class="mt-2 bg-amber-600 text-white px-3 py-2 rounded-xl" data-id="${book.id}">
              Add to Favorites
            </button>
        </div>
        `
    });

};

document.addEventListener("click", (event) => {
    if (event.target.dataset.id) {
        const bookId = Number(event.target.dataset.id);
        const selectedBook = booksData.find(
            book => book.id === bookId
        );

        addFavorite(selectedBook);
        renderFavorites();
    }
});

function showFavorites(){
    const favoritesData = getFavorites();
    favoritesgrid.innerHTML = "";

    favoritesData.forEach(book => {
        favoritesgrid.innerHTML += `
            <div class="bg-white p-4 rounded-xl shadow-xl text-black">
                <img src="#" alt="${book.title}" class="w-full h-52 object-cover rounded-t-xl border-2 border-gray-800">
                <h3 class="font-bold">${book.title}</h3>
                <p>By: ${book.author}</p>

                <button class="mt-2 bg-red-500 text-white p-2 rounded-xl" data-remove="${book.id}">
                    Remove
                </button>
            </div>
        `;
    });
};

document.addEventListener("click", (event) => {

    if (event.target.dataset.remove) {

        const bookId = Number(event.target.dataset.remove);

        removeFavorite(bookId);

        showFavorites();
    }
});



showBooks();
showFavorites();
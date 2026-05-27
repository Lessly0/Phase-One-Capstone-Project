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

// Showing books on the page
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

// Adding books to favorites
document.addEventListener("click", (event) => {
    if (event.target.dataset.id) {
        const bookId = Number(event.target.dataset.id);
        const selectedBook = booksData.find(
            book => book.id === bookId
        );

        addFavorite(selectedBook);
        showFavorites();
    }
});

// Displaying favorite books
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

// Removing books from favorites
document.addEventListener("click", (event) => {
    if (event.target.dataset.remove) {
        const bookId = Number(event.target.dataset.remove);
        removeFavorite(bookId);
        showFavorites();
    }
});

// New showBooks function that fetches data from the API
async function showBooks(query="javascript") {
    booksgrid.innerHTML = `<p>Loading books...</p>`; 
    const books = await fetchBooks(query);
    if (!books.length) {
        booksgrid.innerHTML = `<p>No results found.</p>`;
        return;
    }
    booksgrid.innerHTML = "";
    books.slice(0, 10).forEach(book => {
        booksgrid.innerHTML += `
            <div class="bg-white p-4 rounded-xl shadow text-black">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="${book.title}" class="w-full h-52 object-cover rounded-t-xl border-2 border-gray-800">
                <h3 class="font-bold">${book.title || "No Title"}</h3>
                <p>${book.author_name?.[0] || "Unknown Author"}</p>
                <button class="mt-2 bg-amber-600 text-white px-3 py-2 rounded-xl">
                    Add to Favorites
                </button>
            </div>
        `;
    });
}

// Search functionality
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const query = searchInput.value;
    if (query.trim() === "") return;
    showBooks(query);
});

// New addEventListener for adding favorites with API data
document.addEventListener("click", (event) => {
    if (event.target.dataset.id) {
        const bookId = event.target.dataset.id;
        const book = {
            id: bookId,
            title: event.target.dataset.title,
            author: event.target.dataset.author
        };

        addFavorite(book);
        showFavorites();
    }
});

showBooks();
showFavorites();
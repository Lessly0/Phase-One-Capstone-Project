import {
    getFavorites,
    addFavorite,
    removeFavorite
} from "./favorites.js";

const booksgrid= document.getElementById('books-grid');
const favorites= document.getElementById('favorites-grid');

const booksData = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'},
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee'},
    { id: 3, title: '1984',author: 'George Orwell'},
    { id: 3, title: '1984',author: 'George Orwell'},
    { id: 3, title: '1984',author: 'George Orwell'},
    { id: 4, title: '1984',author: 'George Orwell'}
];

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

}
showBooks();

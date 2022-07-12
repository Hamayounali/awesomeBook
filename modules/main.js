/* eslint-disable */
// Awesome book storage
import { awesomBooks } from './awesomebook.js';
let newAwesomBook = new awesomBooks();
document.querySelector('#newBook').addEventListener('click', newAwesomBook.input);

//Contacs
import { contact } from './contact.js';
document.querySelector('#contactUs').addEventListener('click', contact);

//Add New Books
import { addBook } from './addbook.js';
document.querySelector('#addBooks').addEventListener('click', addBook);

// Book list 
import { booklist } from './booklist.js';
document.querySelector('#bookList').addEventListener('click', booklist);

//Display the books
let display = () => {
  let html = '<div>';
  html += '<table class="center">'
  const storedBook = JSON.parse(localStorage.getItem('books'));
  for (let i = 0; i < storedBook.length; i += 1) {
    newAwesomBook.bookArr.push({ bookName: storedBook[i].bookName, author: storedBook[i].author });
    html += '<tr>'
    html += '<td> "' + newAwesomBook.bookArr[i].bookName + '" by ' + newAwesomBook.bookArr[i].author + '</td>';
    html += '<td class="test"><button onclick="deleteNote(' + i + ')"> Remove </button> </td>';
    html += '</tr>'
    document.getElementById('data').innerHTML = html;
  }
  html += '</table>'
}

//Remove a book
window.deleteNote = (i) => {
  newAwesomBook.bookArr.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(newAwesomBook.bookArr));
  location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  display();
});

setInterval(function(){document.getElementById('date').innerHTML = luxon.DateTime.now()}, 1000);



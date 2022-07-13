import AwesomBooks from './awesomebook.js';

import Contact from './contact.js';

import addBook from './addbook.js';

import booklist from './booklist.js';

const newAwesomBook = new AwesomBooks();
document.querySelector('#newBook').addEventListener('click', newAwesomBook.input);

document.querySelector('#contactUs').addEventListener('click', Contact);

document.querySelector('#addBooks').addEventListener('click', addBook);

document.querySelector('#bookList').addEventListener('click', booklist);

const display = () => {
  let html = '<div>';
  html += '<table class="center">';
  const storedBook = JSON.parse(localStorage.getItem('books'));
  for (let i = 0; i < storedBook.length; i += 1) {
    newAwesomBook.bookArr.push({ bookName: storedBook[i].bookName, author: storedBook[i].author });
    html += '<tr>';
    html += `<td> "${newAwesomBook.bookArr[i].bookName}" by ${newAwesomBook.bookArr[i].author}</td>`;
    html += `<td class="test"><button onclick="deleteNote(${i})"> Remove </button> </td>`;
    html += '</tr>';
    document.getElementById('data').innerHTML = html;
  }
  html += '</table>';
};

window.deleteNote = (i) => {
  newAwesomBook.bookArr.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(newAwesomBook.bookArr));
  window.location.reload();
};

document.addEventListener('DOMContentLoaded', () => {
  display();
});

// undefined Luxon
// eslint-disable-next-line no-undef
setInterval(() => { document.getElementById('date').innerHTML = luxon.DateTime.now(); }, 1000);

/* eslint-disable */
class awesomBooks {
  bookArr = [];
  input = () => {
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    this.bookArr.push({ bookName: name, author: author });
    localStorage.setItem('books', JSON.stringify(this.bookArr));
    location.reload();
  };
}
let newAwesomBook = new awesomBooks();
document.querySelector('#newBook').addEventListener('click', newAwesomBook.input)

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

//remove a book
window.deleteNote = (i) => {
  newAwesomBook.bookArr.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(newAwesomBook.bookArr));
  location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  display();
});


let contact = () => {
  const contact = document.getElementById("contacts");
  const bookList = document.getElementById("booklist");
  const addBook = document.getElementById("addBook");
  contact.style.display = "block";
  bookList.style.display = "none";
  addBook.style.display = "none";
}
document.querySelector('#contactUs').addEventListener('click', contact)

let addBook = () => {
  const contact = document.getElementById("contacts");
  const bookList = document.getElementById("booklist");
  const addBook = document.getElementById("addBook");
  contact.style.display = "none";
  bookList.style.display = "none";
  addBook.style.display = "block";
}
document.querySelector('#addBooks').addEventListener('click', addBook)

let booklist = () => {
  const contact = document.getElementById("contacts");
  const bookList = document.getElementById("booklist");
  const addBook = document.getElementById("addBook");
  contact.style.display = "none";
  bookList.style.display = "block";
  addBook.style.display = "none";
}
document.querySelector('#bookList').addEventListener('click', booklist)



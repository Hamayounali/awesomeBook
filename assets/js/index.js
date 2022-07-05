/* eslint-disable */
class awesomBooks {
  bookArr = [];
  input () {
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    this.bookArr.push({ bookName: name, author: author });
    localStorage.setItem('books', JSON.stringify(this.bookArr));
    location.reload();
  };
}
let newAwesomBook = new awesomBooks();

function display() {
  let html = '<div>';
  html += '<table class="center">'
  const storedBook = JSON.parse(localStorage.getItem('books'));
  for (let i = 0; i < storedBook.length; i += 1) {
    const book = i;

    newAwesomBook.bookArr.push({ bookName: storedBook[i].bookName, author: storedBook[i].author });
    html += '<tr>'
    html += '<td> "' + newAwesomBook.bookArr[i].bookName + '" by ' + newAwesomBook.bookArr[i].author + '</td>';
    html += '<td class="test"><button onclick="deleteNote(' + book + ')"> Remove </button> </td>';
    html += '</tr>'
    document.getElementById('data').innerHTML = html;
  }
  html += '</table>'
}

//remove a book
function deleteNote(i) {
  newAwesomBook.bookArr.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(newAwesomBook.bookArr));
  location.reload();
}


document.addEventListener('DOMContentLoaded', () => {
  display();
});

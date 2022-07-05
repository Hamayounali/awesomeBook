let bookArr = [];

function input(){
  let name = document.getElementById("name").value;
  let author = document.getElementById("author").value;
  bookArr.push({'bookName':name, 'author':author});
  localStorage.setItem('books', JSON.stringify(bookArr));
  location.reload();
}

function display() {
let html = '<div>';
let storedBook = JSON.parse(localStorage.getItem('books'));
  for(let i = 0; i <storedBook.length;  i ++){
    bookArr.push({'bookName':storedBook[i].bookName, 'author':storedBook[i].author});
    html += '<p>Book Name: ' + bookArr[i].bookName +' <br> Author Name : '+ bookArr[i].author +'</p>' ;
    const book = i;
    html += '<button onclick="deleteNote('+book+')"> Remove </button>';
    html += '<br>';
    html += '<hr class ="line">';
    html += '<br>';
    document.getElementById('data').innerHTML=html;
  }
}

function deleteNote(i) {
  bookArr.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(bookArr));
  location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  display();
});



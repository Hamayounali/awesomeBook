export const addBook = () => {
  const contact = document.getElementById('contacts');
  const bookList = document.getElementById('booklist');
  const addBook = document.getElementById('addBook');
  contact.style.display = 'none';
  bookList.style.display = 'none';
  addBook.style.display = 'block';
}
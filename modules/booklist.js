const booklist = () => {
  const contact = document.getElementById('contacts');
  const bookList = document.getElementById('booklist');
  const addBook = document.getElementById('addBook');
  contact.style.display = 'none';
  bookList.style.display = 'block';
  addBook.style.display = 'none';
};

export default booklist;

export default deleteNote = (i) => {
  newAwesomBook.bookArr.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(newAwesomBook.bookArr));
  location.reload();
}

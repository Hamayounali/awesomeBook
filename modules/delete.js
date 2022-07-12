/* eslint-disable no-undef */
export default deleteNote = (i) => {
  newAwesomBook.bookArr.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(newAwesomBook.bookArr));
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

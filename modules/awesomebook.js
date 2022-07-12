// eslint-disable-next-line import/prefer-default-export
export class AwesomBooks {
  bookArr = [];

  input = () => {
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    this.bookArr.push({ bookName: name, author });
    localStorage.setItem('books', JSON.stringify(this.bookArr));
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
}

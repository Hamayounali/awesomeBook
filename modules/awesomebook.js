/* eslint-disable */
export class awesomBooks {
    bookArr = [];

    input = () => {
      const name = document.getElementById('name').value;
      const author = document.getElementById('author').value;
      this.bookArr.push({ bookName: name, author: author });
      localStorage.setItem('books', JSON.stringify(this.bookArr));
      location.reload();
  };
  }
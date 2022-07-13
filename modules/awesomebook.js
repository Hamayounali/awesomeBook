class AwesomBooks {
  bookArr = [];

  input = () => {
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    this.bookArr.push({ bookName: name, author });
    localStorage.setItem('books', JSON.stringify(this.bookArr));
    window.location.reload();
  };
}

export default AwesomBooks;

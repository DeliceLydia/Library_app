const formToggler = document.getElementById('formToggler');
const form = document.getElementById('form');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput');
const checkboxInput = document.getElementById('readCheckbox');

formToggler.addEventListener('click', function () {
  form.toggleAttribute('hidden');
});

let myBooks = [];

function Book(title = '', author = '', pages = '', read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(event) {
  event.preventDefault();

  const book = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    checkboxInput.checked
  );
  myBooks.push({ book });
  console.log(myBooks);
}

form.addEventListener('submit', function (event) {
  addBookToLibrary(event);
});

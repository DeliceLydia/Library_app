const formToggler = document.getElementById('formToggler');
const form = document.getElementById('form');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput');
const checkboxInput = document.getElementById('readCheckbox');
const bookList = document.getElementById('bookList');

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

  updateBooks();
  form.reset();
}

function updateBooks() {
  bookList.innerHTML = '';
  myBooks.forEach(({ book }) => createBookCard(book));
}

function removeBook(event) {
  const title = event.target.dataset.title;
  myBooks = myBooks.filter(({ book }) => book.title !== title);

  updateBooks();
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('h3');
  const bookPages = document.createElement('span');

  const removeButton = document.createElement('button');
  removeButton.setAttribute('type', 'button');
  removeButton.setAttribute('data-title', book.title);
  removeButton.innerText = 'Remove book';

  const readButton = document.createElement('button');
  readButton.setAttribute('type', 'button');
  readButton.innerText = 'Read';

  bookCard.classList.add('book-card');
  bookTitle.innerText = book.title;
  bookAuthor.innerText = book.author;
  bookPages.innerText = book.pages;

  bookCard.append(bookTitle);
  bookCard.append(bookAuthor);
  bookCard.append(bookPages);
  bookCard.append(removeButton);
  bookCard.append(readButton);
  bookList.append(bookCard);

  removeButton.addEventListener('click', removeBook);
}

formToggler.addEventListener('click', function () {
  form.toggleAttribute('hidden');
});

form.addEventListener('submit', function (event) {
  addBookToLibrary(event);
});

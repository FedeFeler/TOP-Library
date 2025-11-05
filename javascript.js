const myLibrary = [];

function Book(name, author, pages) {
  if (!new.target) {
    console.log("You need to use the 'new' operator.")
  }
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
};


function addBookToLibrary(name, author, pages) {
  const book = new Book(name, author, pages);
  myLibrary.push(book);
}

const container = document.querySelector(".container")

const addBtn = document.querySelector(".add-btn");

const nameInput = document.createElement("input");
nameInput.id = 'name-input';
nameInput.classList.add("name-input");
const nameLabel = document.createElement("label");
nameLabel.textContent = "Book name: ";
nameLabel.classList.add("name-label");
nameLabel.setAttribute("for", "name-input")

const authorInput = document.createElement("input");
authorInput.id = 'author-input';
authorInput.classList.add("author-input");
const authorLabel = document.createElement("label");
authorLabel.textContent = "Author: ";
authorLabel.classList.add("author-label");
authorLabel.setAttribute("for", "author-input");

const pagesInput = document.createElement("input");
pagesInput.id = 'pages-input';
pagesInput.classList.add("pages-input");
const pagesLabel = document.createElement("label");
pagesLabel.textContent = "Pages: ";
pagesLabel.classList.add("pages-label");
pagesLabel.setAttribute("for", "pages-input");

const confirmBtn = document.createElement("button");
confirmBtn.classList.add("confirm-btn");
confirmBtn.textContent = "Confirm";
const form = document.querySelector(".form");

addBtn.addEventListener("click", (event) => {
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(authorLabel);
  form.appendChild(authorInput);
  form.appendChild(pagesLabel);
  form.appendChild(pagesInput);
  form.appendChild(confirmBtn);
  event.preventDefault();
})

confirmBtn.addEventListener("click", (event) => {
  const nameInput = document.getElementById("name-input");
  const authorInput = document.getElementById("author-input");
  const pagesInput = document.getElementById("pages-input");
  const nameValue = nameInput.value;
  const authorValue = authorInput.value;
  const pagesValue = pagesInput.value;
  addBookToLibrary(nameValue, authorValue, pagesValue);

  const book = myLibrary[myLibrary.length - 1];
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = `Book Name: ${book.name}
  Author: ${book.author}
  Pages: ${book.pages}`;
  card.dataset.id = book.id;
  container.appendChild(card);
  const delBtn = document.createElement("button");
  delBtn.classList.add("del-btn");
  delBtn.textContent = "Delete";
  card.appendChild(delBtn);
  nameInput.remove();
  nameLabel.remove();
  authorInput.remove();
  authorLabel.remove();
  pagesInput.remove();
  pagesLabel.remove();
  confirmBtn.remove();
  event.preventDefault();
});

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("del-btn")) {
    const card = event.target.parentElement;
    card.remove();
  }
})







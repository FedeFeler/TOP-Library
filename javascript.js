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
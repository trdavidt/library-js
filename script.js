let myLibrary = [];

/*//test add book
addBookToLibrary(new Book('Jane Eyre', 'Charlotte Bronte', 466, 'already read'));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkein', 295, 'not read'));
addBookToLibrary(new Book('Wuthering Heights', 'Emily Bronte', 400, 'already read'));
addBookToLibrary(new Book('Hamlet', 'Wiliam Shakespeare', 300, 'already read'));

//test display library
displayLibrary();

//Book object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

Book.prototype.changeRead = function() {
  if(this.read === 'already read') this.read = 'not read';
  else this.read = 'already read';
  displayLibrary();
}*/

//Book object using class

//Book object
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
  
  changeRead() {
    if(this.read === 'already read') this.read = 'not read';
    else this.read = 'already read';
    displayLibrary();
  }
}

 //library functions
function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {
  const libraryWrapper = document.querySelector('body .library');
  libraryWrapper.innerHTML = '';
  let i = 0;

  myLibrary.forEach((book) => {  
    let card = document.createElement('div');
    card.classList.add('card');

    let title = document.createElement('h3');
    title.innerHTML = "Checked out: " + book['title'];
    console.log(title.innerHTML);

    title.innerHTML += `<button id=${i} class='remove-btn'>Remove</button>`;  

    title.innerHTML += `<button id=${i} class='read-btn'>Change read status</button>`;  

    let info = document.createElement('p');
    info.innerHTML = book.info();
    console.log(info.innerHTML);

    card.appendChild(title);
    card.appendChild(info);
    libraryWrapper.appendChild(card);

    i++;    
  })

  //add event listener to each remove button
  const removeBtns = document.querySelectorAll('.remove-btn');

  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener('click', function() {
      removeBook(removeBtn.getAttribute('id'));
      
      console.log("clicked");
    })
  })

  //add event listener to each change read button
  const readBtns = document.querySelectorAll('.read-btn');

  readBtns.forEach((readBtn) => {
    readBtn.addEventListener('click', function() {
      myLibrary[+(readBtn.getAttribute('id'))].changeRead();
      
      console.log(readBtn.getAttribute('id'));
    })
  })
}

//add event listener to new book button
const newBookBtn = document.querySelector('.buttons #new-book-btn');
newBookBtn.addEventListener('click', function() {
  newBook();  
})

function newBook() {
  let title = prompt("Enter a title:");
  let author = prompt("Enter an author:");
  let pageNum = prompt("How many pages long is this book (enter number)?");
  let readYet = prompt("Have you read this book yet (not/already read)?");

  let newBook = new Book(title, author, pageNum, readYet.toLowerCase());
  addBookToLibrary(newBook);

  displayLibrary();
}

function removeBook(id) {
  myLibrary.splice(+id, 1);
  console.log("removed");
  displayLibrary();
}

//test add book
addBookToLibrary(new Book('Jane Eyre', 'Charlotte Bronte', 466, 'already read'));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkein', 295, 'not read'));
addBookToLibrary(new Book('Wuthering Heights', 'Emily Bronte', 400, 'already read'));
addBookToLibrary(new Book('Hamlet', 'Wiliam Shakespeare', 300, 'already read'));

//test display library
displayLibrary();



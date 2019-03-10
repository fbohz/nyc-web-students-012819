// const fetchBooks = () => data.books;

// Google Books API docs:
// https://developers.google.com/books/docs/v1/using
// search term:
// `https://www.googleapis.com/books/v1/volumes?q=ruby+programming`
// author name:
// `https://www.googleapis.com/books/v1/volumes?q=inauthor:eco`

document.addEventListener('DOMContentLoaded', function() {
  // THIS IS CURRENTLY ENTIRELY SYNCHRONOUS, WE HAVE ACCESS TO DATA.BOOKS, a static array
  console.log(data.books);
  // DOM Nodes
  const list = document.querySelector('.ui.relaxed.divided.list')
  const header = document.querySelector('.ui.inverted.teal.menu')

  // FUNCTIONS: create DOM nodes (components)
  const createListItem = (book) => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
    <i class="large book middle aligned icon"></i>
    <div class="content">
      <a data-id="${book.id}" class="header" href="/">${book.title}</a>
      <div class="description">
        ${book.author}
      </div>
    </div>
    `;

    return div;
  }

  const createCard = (book) => {
    const div = document.createElement('div');
    div.className = 'ui fluid card';
    div.innerHTML = `
    <div class="image">
      <img src="${book.imageLink}"/>
    </div>
    <div class="content">
      <h1 class="ui header">
        ${book.title}
        <div class='sub header'>
          ${book.author}
        </div>
      </h1>
      <div class="meta">
        <span>${book.pages} pages</span>
      </div>
      <div class="ui divider"></div>
      <div class="description">
        ${book.description}
      </div>
    </div>
    `;
    return div;
  }


  // FUNCTIONS: render onto DOM
  const renderBooks = () => {
    list.innerHTML = ''
    const bookListItems = data.books.map(createListItem)
    bookListItems.forEach(renderListItem)
  }

  const renderListItem = (node) => {
    list.appendChild(node)
  }

  const renderCard = (node) => {
    list.innerHTML = '';
    list.appendChild(node)
  }

  // FUNCTIONS: EVENT HANDLERS
  const handleListItemClick = (e) => {
    e.preventDefault();
    const clicked = e.target;

    if (clicked.className === 'header') {
      const id = parseInt(clicked.dataset.id);
      const book = data.books.find(book => book.id === id )
      const card = createCard(book)

      renderCard(card)
    }
  }

  const handleHeaderClick = (e) => {
    e.preventDefault()
    renderBooks()
  }


  // Show Books & Attach Event Listener
  renderBooks()

  list.addEventListener('click', handleListItemClick)
  header.addEventListener('click', handleHeaderClick)

});

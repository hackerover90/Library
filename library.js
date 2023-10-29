const myLibrary = []

function Book(title, author, page_num, read) {
    this.title = title
    this.author = author
    this.page_num = page_num
    this.read = read
    this.info = function() {
        if (read == true) {
            return `${this.title} by ${this.author}, ${page_num} pages, finshed reading`
        }
        else {
            return `${this.title} by ${this.author}, ${page_num} pages, not yet read`
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks() {
    let body = document.getElementById("body")
    for (const book of myLibrary) {
        let card = document.createElement('div')
        let card_body = document.createElement('div')
        let card_title = document.createElement('h4')
        let card_author = document.createElement('h6')
        let card_text = document.createElement('p')
        card.classList.add('card', 'my-3')
        card_body.classList.add('card-body')
        card_title.classList.add('card-title')
        card_author.classList.add('card-title')
        card_text.classList.add('card-text')
        card_title.innerHTML = book.title
        card_author.innerHTML = `By ${book.author}`
        body.appendChild(card)
        card.appendChild(card_body)
        card_body.appendChild(card_title)
        card_body.appendChild(card_author)
        card_body.appendChild(card_text)
    }
}

let book1 = new Book("The Hobbit", "Tolkian", "10", false)
let book2 = new Book("The Hunger Games", "Collins", "300", true)
addBookToLibrary(book1)
addBookToLibrary(book2)
displayBooks()
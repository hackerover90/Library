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

function removeBookFromLibrary(bookIndex) {
    myLibrary.splice(bookIndex, 1)
}

Book.prototype.changeReadStatus = function () {
    if (this.read) {
        this.read = false
    } else {
        this.read = true
    }
}

function displayBooks(book) {
    let body = document.getElementById("body")
    let card = document.createElement('div')
    let card_body = document.createElement('div')

    let card_header_container = document.createElement('div')
    let card_title = document.createElement('h4')
    let card_author = document.createElement('h6')

    let card_footer_container = document.createElement('div')
    let card_pageNum = document.createElement('h6')
    let read_toggle = document.createElement('div')
    let read_input = document.createElement('input')
    let read_label = document.createElement('label')

    let close = document.createElement('button')
    close.type = 'button'
    let index = myLibrary.findIndex(e => e === book)
    close.setAttribute('libraryIndex', index)

    card.classList.add('card', 'my-3')
    card_body.classList.add('card-body')
    
    card_header_container.classList.add("d-flex", "justify-content-between")
    card_title.classList.add('card-title')
    close.classList.add('card_close', 'btn-close')

    card_author.classList.add('card-title')

    card_footer_container.classList.add("d-flex", "justify-content-between")
    card_pageNum.classList.add('card-title')
    read_toggle.classList.add('form-check', 'form-switch')
    read_input.classList.add("form-check-input")
    read_input.type = "checkbox"
    read_input.role = "switch"
    read_label.classList.add("form-check-label")

    if (book.read == true) {
        read_input.checked = true
    } else {
        read_input.checked = false
    }
    
    card_title.innerHTML = book.title
    card_author.innerHTML = `By ${book.author}`
    card_pageNum.innerHTML = `Number of Pages: ${book.page_num}`
    read_label.innerHTML = 'Read'

    body.appendChild(card)
    card.appendChild(card_body)
    card_body.appendChild(card_header_container)
    card_header_container.appendChild(card_title)
    card_header_container.appendChild(close)
    card_body.appendChild(card_author)
    card_body.appendChild(card_footer_container)
    card_footer_container.appendChild(card_pageNum)
    card_footer_container.appendChild(read_toggle)
    read_toggle.appendChild(read_input)
    read_toggle.appendChild(read_label)
}

let new_book_form = document.getElementById('new_book_form')
new_book_form.addEventListener('submit', e => {
    e.preventDefault()
    let title = document.getElementById('title')
    let author = document.getElementById('author')
    let page_num = document.getElementById('page_num')
    let checkbox_status = document.getElementById('read_check').checked 
    let book = new Book(title.value, author.value, page_num.value, checkbox_status)
    addBookToLibrary(book)
    displayBooks(book)
    new_book_form.reset()
    
})

let body = document.getElementById('body')
body.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'card_close') {
        removeBookFromLibrary(e.target.getAttribute('libraryindex'))
        e.target.parentElement.parentElement.parentElement.remove()
    }
    if (e.target.classList[0] == "form-check-input") {
        myLibrary[e.target.parentElement.parentElement.parentElement.firstChild.lastChild.getAttribute('libraryindex')].changeReadStatus()
    }
})


    


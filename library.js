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


function displayBooks(book) {
    let body = document.getElementById("body")
    let card = document.createElement('div')
    let card_body = document.createElement('div')
    let card_title = document.createElement('h4')
    let card_author = document.createElement('h6')
    let card_pageNum = document.createElement('h6')

    let close = document.createElement('button')
    close.type = 'button'
    let index = myLibrary.findIndex(e => e === book)
    close.setAttribute('libraryIndex', index)

    card.classList.add('card', 'my-3')
    card_body.classList.add('card-body')
    card_title.classList.add('card-title')
    card_author.classList.add('card-title')
    card_pageNum.classList.add('card-title')
    close.classList.add('card_close', 'btn-close')
    //close.onclick = deletes
    card_title.innerHTML = book.title
    card_author.innerHTML = `By ${book.author}`
    card_pageNum.innerHTML = `Number of Pages: ${book.page_num}`

    body.appendChild(card)
    card.appendChild(card_body)
    card_body.appendChild(card_title)
    card_body.appendChild(card_author)
    card_body.appendChild(card_pageNum)
    card_body.appendChild(close)

    
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

/*
function deletes() {
    console.log(index)
}
*/


let cards = document.getElementsByClassName('card_close')
    Array.from(cards).forEach(e => {
    e.addEventListener('click', () => {
        console.log(e)
    })
    });


    


class Book {
    constructor (title, author) {
        this.title = title;
        this.author = author;
    }

    describe() {
        return `${this.title} written by ${this.author}.`;
    }
}


class Menu {
    constructor() {
        this.books = [];
    }
    start() {

        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection){
                case '1': 
                    this.addBook();
                    break;
                case '2':
                    this.viewBooks();
                    break;
                case '3':
                    this.deleteBook();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
       }
    alert('Goodbye!');
    }

    showMainMenuOptions(){
    return prompt(`
    0) exit
    1) add new book
    2) view all books
    3) delete book
    `);
    }

    addBook() {
        let title = prompt('Enter the name of the book here:');
        let author = prompt('Enter author name here:');
        this.books.push(new Book(title, author));
        alert('Success!')
    }

    viewBooks() {
        let bookString = '';
        for (let i = 0; i < this.books.length; i++) {
                bookString += i + ') ' + this.books[i].describe() + '\n'
        }
        alert(bookString);
    }

    deleteBook() {
        this.viewBooks();
        let index = prompt('Enter the index of the book you wish to delete:');
        if (index > -1 && index < this.books.length) {
            this.books.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongodb1', {useFindAndModify: false,useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
        console.log('mongodbga ulanish amalga oshdi');
    })
    .catch((err) => {
        console.error('Xato yuz berdi');
    });

    const bookSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true
        },
        publish: {
            type: Boolean,
            required: true
        }
    });

    const Book = mongoose.model('Book', bookSchema);

    async function createBook() {
        const book = new Book({
            title: "Nodejs masalalar to`plami",
            author: "Sardorbek Qilichov",
            publish: false
        });

        const savedBook = await book.save();
        console.log(savedBook);
    }

    // createBook();

    async function getBooks() {
        const book = await Book.find();
        console.log(book);
    }

    getBooks();

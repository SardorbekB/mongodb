const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongodb', {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('mongodga ulanish amalga oshdi');
    })
    .catch((err) => {
        console.error('mongodbga ulanishda xato yuz berdi');
    });

const studentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);

async function createStudent() {
    const student = new Student({
        firstName: "Sardorbek",
        lastName: "Qilichov"
    });

    const savedStudent = await student.save();

    console.log(savedStudent);
}

createStudent();
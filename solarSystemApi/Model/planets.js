require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB'ye bağlanıldı");
}).catch((err) => {
    console.error("MongoDB'ye bağlanırken hata oluştu:", err);
});


const Schema = mongoose.Schema

const solar1 = new Schema({
    ad: {
        type: String,
        require: true,
    },
    baslik: {
        type: String,
        require: true,
    }, hız: {
        type: String,
        require: true,
    }, hacim: {
        type: String,
        require: true,
    }, kütle: {
        type: String,
        require: true,
    }, uydu: {
        type: String,
        require: true,
    }

},
);

const Planets = mongoose.model('planets', solar1, "planets")

module.exports = Planets;
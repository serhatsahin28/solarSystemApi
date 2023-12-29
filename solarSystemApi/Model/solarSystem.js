require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB'ye bağlanıldı");
  }).catch((err) => {
    console.error("MongoDB'ye bağlanırken hata oluştu:", err);
  });
  
const Schema = mongoose.Schema

const solar1 = new Schema({
    title: {
        type: String,
        require: true,
    },
    options: {
        type: String,
        require: true,
    }, creations: {
        type: String,
        require: true,
    }, other: {
        type: String,
        require: true,
    }, planets: {
        type: String,
        require: true,
    }, destroy: {
        type: String,
        require: true,
    }

},
);

const Solar = mongoose.model('solarSystem', solar1, "solarSystem")

module.exports = Solar;
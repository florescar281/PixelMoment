const mongoose = require('mongoose');

BD_URI = "mongodb://localhost:27017/PixelMoment";

module.exports = () => {
    const connect = () => {
        mongoose.connect(BD_URI, {
            keepAliveInitialDelay: 300000,
            useNewUrlParser: true
        })
        .then(() => console.log("Conectado a la BD"))
        .catch((err) => console.log(err));
    }

    connect();
}
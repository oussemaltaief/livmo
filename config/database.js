const mongoose = require("mongoose");

//mongoose.connect('mongodb://127.0.0.1:27017/livmo' + process.env.DB_USER_PASS+ '@livmo.raykivf.mongodb.net/BAGNGO',
//mongoose.connect('mongodb+srv://' + process.env.DB_USER_PASS+ '@livmo.raykivf.mongodb.net/BAGNGO',
//ejoUn7XFhCZbdXjU

//connect data
mongoose.set('strictQuery', false);
const connectDatabase = () => {
mongoose.connect('mongodb+srv://admin:ejoUn7XFhCZbdXjU@cluster0.i4z7lvu.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongooDB', err));
}
    module.exports = connectDatabase;

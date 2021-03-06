const mongoose = require(`mongoose`);
const config = require(`config`);
const db = config.get(`mongoURI`);

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser:true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log("DB CONNECTED");
    } catch (error) {
        console.log(`handle error here: `, e.message);
            process.exit(1);
    }
}

module.exports = connectDB;
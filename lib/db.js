const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://godxmodsnewsm_db_user:SDLLVVOeIScUCY8j@cluster0.yxfytnp.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("DB Error:", err));

module.exports = mongoose;
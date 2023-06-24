const mongoose = require("mongoose");

class db {
  #connection;

  constructor() {
    console.log("Connecting to database");
    this.initialize();
  }

  async initialize() {
    await this.#connect();
    console.log('Initialization complete!');
  }

  async #connect() {
    const mongo_uri = "mongodb+srv://shekharmaharaj2905:Paradise1@paradisebeach.textclv.mongodb.net/?retryWrites=true&w=majority";
    try {
      this.#connection = await mongoose.connect(mongo_uri);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = db;

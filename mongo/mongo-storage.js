const mongoClient = require('mongodb').MongoClient;

class MongoStorage {
    constructor() {
        this.db = null;
        this.logs = null;
        this.users = null;
        console.log('ctorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    }

    initialize(connectionString) {
        mongoClient.connect('mongodb://localhost/',(err,database) =>{
            if (err) return console.log(err);
            console.log("conected to mongo db with native driver");
            this.db = database.db('mern-secure')
            this.users = this.db.collection('users');
  })
    }

   
}

module.exports = new MongoStorage();

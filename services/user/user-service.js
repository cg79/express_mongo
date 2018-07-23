const ObjectID = require('mongodb').ObjectID;
const mongoStorage = require('../../mongo/mongo-storage');

class UserService {

constructor() {
  mongoStorage.initialize();
}
  async addUser(data) {
    //throw {code:444};
    const resp = await mongoStorage.users.insert({a:777});
    return resp;
  }

  
}

module.exports = new UserService();

const ObjectID = require('mongodb').ObjectID;
import mongoStorage from '../../mongo/mongo-storage';

class UserService {

constructor() {
  mongoStorage.initialize();
}
  async addUser(data) {
    //throw {code:444};
    const resp = await mongoStorage.users.insert({a:777});
    return resp;
  }

  async login(data) {
    //throw {code:444};
    const resp = await mongoStorage.users.insert({a:777});
    return resp;
  }

  
}

module.exports = new UserService();

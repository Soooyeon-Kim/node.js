"use strict"

class UserStorage {
    static #users = {
        id: ["sooyeon" , "eunji" , "jisoo"],
        psword: ["1234", "5678", "9090"],
        name: ["김수연", "정은지", "강지수"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
"use strict"
const db = require("../config/db");


class UserStorage {
    //static getUsers(isAll, ...fields) {}
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?";
            db.query( query, [id], (err, data) => {
                if (err) reject(err);
                // console.log(data[0]);
                resolve (data[0]);
            });
        });
    }
 
    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?)";
            db.query(
                 query, 
                 [userInfo.id, userInfo.name, userInfo.psword], 
                 (err) => {
                    if (err) reject(`${err}`);
                    // console.log(data[0]);
                    resolve ({ success: true });
                }
            );
        });
        
    }
    /*
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if (isAll) return users;
        // private 변수나 메서드는 항상 class 최상단에 위치시킨다.
        // const users = this.users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    */

}

module.exports = UserStorage;
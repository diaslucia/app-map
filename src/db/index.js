import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("address.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {  
       db.transaction((tx) => {
           tx.executeSql("CREATE TABLE IF NOT EXISTS address (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL)",
           [],
           () => { resolve() },
           (_, err) => { reject(err) })
       }) 
    })

    return promise
}

export const insertAddress = (name, image, address, lat, lng) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO address (name, image, address, lat, lng) VALUES (?, ?, ?, ?, ?)",
                [name, image, address, lat, lng],
                (_, result) => { resolve(result) },
                (_, err) => reject(err)
            )
        })
    })

    return promise
}

export const fetchAddress = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM address",
                [],
                (_, result) => { resolve(result) },
                (_, err) => reject(err)
            )
        })
    })
    
    return promise
}

export const removeAddress = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM address WHERE id = ?",
                [id],
                (_, result) => { resolve(result) },
                (_, err) => reject(err)
            )
        })
    })
}
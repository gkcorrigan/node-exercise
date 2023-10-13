import mysql from "mysql2"
import dbInfo from "./index.js"

// const db = dbInfo.mysql;

//Make the connection to the database
const connection = mysql.createPool(dbInfo.mysql);

const query = (qryStr, values) => {
    return new Promise((res, rej) => {
      connection.query(qryStr, values, (err, results) => {
        if (err) rej(err);
        res(results);
      });
    });
  };

  export default query;
import mysql from "mysql";

export const db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "password",
	database: "DBMS_EL",
	connectionLimit: 10,
});

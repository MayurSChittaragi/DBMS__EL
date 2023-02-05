import userMessage from "../models/userMessage.js";
import { db } from "../db.js";

export const register = async (req, res) => {
	const data = req.body;
	console.log("backend", data);

	const q0 = "SELECT * FROM CUSTOMER WHERE customer_login=?";
	db.query(q0, [data.email], (err, result) => {
		if (err) res.status(500).json({ err, message: "Regn Unsuccessful" });
		if (result.length != 0) {
			res.status(400).json({ message: "Email already exists" });
		} else {
			const q =
				"INSERT INTO CUSTOMER(customer_login, password) VALUES(?,?)";
			db.query(q, [data.email, data.password], async (err, result) => {
				if (err)
					res.status(500).json({ err, message: "Regn Unsuccessful" });
				console.log(result.insertId);
				// const user = await getUser(result.insertId);
				const q2 = "SELECT * FROM CUSTOMER WHERE cust_id=?";
				db.query(q2, [result.insertId], (err, result) => {
					if (err)
						res.status(500).json({
							err,
							message: "Regn Unsuccessful",
						});
					const { password, ...user } = result[0];
					res.status(200).send({
						user: user,
						message: "Registration Successful",
					});
				});
			});
		}
	});

	// const newUser = new userMessage(data);
	// try {
	// 	await newUser.save();
	// 	res.status(200).json(newPost);
	// } catch (error) {
	// 	res.status(404).json({ message: error.message });
	// }
};

export const login = async (req, res) => {
	const data = req.body;
	console.log(data, "helo");
	const { email, password } = req.body;
	const q = "SELECT * FROM CUSTOMER where customer_login=?";

	db.query(q, [email], (err, result) => {
		if (err) res.status(500).send(err);
		if (result.length != 0) {
			// console.log(result[0]);
			if (result[0].password == password) {
				const { password, ...user } = result[0];
				console.log(user);
				res.status(200).send({
					user,
					message: "Login Successful",
				});
			} else {
				res.status(401).send({ message: "Password is incorrect!" });
			}
		} else {
			res.status(401).send({ message: "User not found!" });
		}
	});

	// userMessage.findOne({ email: email }, (err, user) => {
	// 	// console.log(user);
	// 	if (user) {
	// 		if (password == user.password) {
	// 			res.send({ message: "Login Successfull", user: user });
	// 		} else {
	// 			res.send({ message: "password looks incorrect" });
	// 		}
	// 	} else {
	// 		res.send({ message: "user not found" });
	// 	}
	// });
};

export const getUsers = async (req, res) => {
	// try {
	// 	const users = await userMessage.find();
	// 	// console.log(users);
	// 	res.status(200).json(users);
	// } catch (error) {
	// 	res.status(404).json({ message: error.message });
	// }
	const q = "SELECT * FROM CUSTOMER";
	db.query(q, (err, result) => {
		if (err) res.status(500).send(err);
		// console.log(result);
		res.status(200).json(result);
	});
};

const getUser = async (cust_id) => {
	const q2 = "SELECT * FROM CUSTOMER WHERE cust_id=?";
	db.query(q2, [cust_id], (err, result) => {
		if (err) return err;
		return result[0];
	});
};

import userMessage from "../models/userMessage.js";
import { db } from "../db.js";

export const login = async (req, res) => {
	const data = req.body;
	// console.log(data);
	// console.log("backend", data);
	const newUser = new userMessage(data);
	try {
		await newUser.save();
		res.status(200).json(newPost);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getUsers = async (req, res) => {
	// try {
	//   const users = await userMessage.find();
	//   // console.log(users);
	//   res.status(200).json(users);
	// } catch (error) {
	//   res.status(404).json({ message: error.message });
	// }
	const q = "SELECT * FROM CUSTOMER";
	db.query(q, (err, result) => {
		if (err) res.status(500).send(err);
		console.log(result);
		res.status(200).json(result);
	});
};

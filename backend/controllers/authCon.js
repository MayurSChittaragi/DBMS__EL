import userMessage from "../models/userMessage.js";

export const register = async (req, res) => {
  const data = req.body;
  // console.log("backend", data);
  const newUser = new userMessage(data);
  try {
    await newUser.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const data = req.body;
  // console.log(data, "helo");
  const { email, password } = req.body;
  userMessage.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password == user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "password looks incorrect" });
      }
    } else {
      res.send({ message: "user not found" });
    }
  });
};

export const getUsers = async (req, res) => {
  try {
    const users = await userMessage.find();
    // console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

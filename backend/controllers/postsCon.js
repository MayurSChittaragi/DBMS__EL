import mongoose from "mongoose";
import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const data = await postMessage.find();
    // console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  // console.log(post);
  const newPost = new postMessage(post);
  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId(id)) return res.status(404);
  await postMessage.findByIdAndRemove(id);
};

export const addCart = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId(id)) return res.status(404);
  const resp = await postMessage.findByIdAndUpdate(id, {
    addCart: true,
  });
  const data = await postMessage.find();
  // console.log(data);
  res.status(200).json(data);
};

export const removeCart = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId(id)) return res.status(404);
  await postMessage.findByIdAndUpdate(id, {
    addCart: false,
  });
  const data = await postMessage.find();
  // console.log(data);
  res.status(200).json(data);
};

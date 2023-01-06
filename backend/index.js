import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(cookieParser());
app.use("/", postRoutes);
const CONNECTION_URL =
	"mongodb+srv://Meeth:Legolego2002@cluster0.l6dizcm.mongodb.net/firstPorject?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose
	.connect(CONNECTION_URL)
	.then(() =>
		app.listen(PORT, () => console.log(`Connected to server ${PORT}`))
	)
	.catch((error) => console.log(error.message));

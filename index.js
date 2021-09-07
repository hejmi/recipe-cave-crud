import express, { json } from "express";
import db from "./config/db.js";
import cors from "cors";

const app = express();
const PORT = 3002;
app.use(cors());
app.use(json());

// Route to get all posts
app.get("/api/get", (req, res) => {
	db("SELECT * FROM recipe", (err, result) => {
		if (err) {
			console.log(err);
		}
		res.send(result);
	});
});

// Route to get one post
app.get("/api/getFromId/:id", (req, res) => {
	const id = req.params.id;
	db("SELECT * FROM recipe WHERE id = ?", id, (err, result) => {
		if (err) {
			console.log(err);
		}
		res.send(result);
	});
});

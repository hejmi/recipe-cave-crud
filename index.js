import express from "express";
import db from "./config/db.js";
import cors from "cors";

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// Route to get all posts
app.get("/api/get", (req, res) => {
	db.query("SELECT * FROM recipe ORDER BY title", (err, result) => {
		if (err) {
			console.log(err);
		}
		res.send(result);
	});
});

// Route to get one post
app.get("/api/getFromId/:id", (req, res) => {
	const id = req.params.id;
	db.query("SELECT * FROM recipe WHERE id = ?", id, (err, result) => {
		if (err) {
			console.log(err);
		}
		res.send(result);
	});
});

// Route to get all ingredients for a recipe
app.get("/api/getIngredientsFromId/:id", (req, res) => {
	const id = req.params.id;
	db.query("SELECT * FROM ingredient WHERE recipe_id = ?", id, (err, result) => {
		if (err) {
			console.log(err);
		}
		res.send(result);
	});
});

// Route to get all steps for a recipe
app.get("/api/getStepsFromId/:id", (req, res) => {
	const id = req.params.id;
	db.query("SELECT * FROM step WHERE recipe_id = ?", id, (err, result) => {
		if (err) {
			console.log(err);
		}
		res.send(result);
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});

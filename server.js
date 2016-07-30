import express from 'express';
import { MongoClient } from 'mongodb';
require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.listen(3000);

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
	if (err) {
		throw err;
	}

	database.collection('links').find({}).toArray((e, links) => {
		if (e) {
			throw e;
		}

		console.log(links);
	});
});

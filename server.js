import express from 'express';
import { MongoClient } from 'mongodb';
import GraphQLHTTP from 'express-graphql';
require('dotenv').config();
import { Schema } from './data/schema';

const app = express();

app.use(express.static('public'));

let db;

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
	if (err) {
		throw err;
	}

	db = database;

	app.use('/graphql', GraphQLHTTP({
		schema: Schema(db),
		graphiql: true
	}));

	app.listen(3000);

});

app.get('/data/links', (req, res) => {
	db.collection('links').find({}).toArray((err, links) => {
		if (err) {
			throw err;
		}

		res.json(links);
	});
});

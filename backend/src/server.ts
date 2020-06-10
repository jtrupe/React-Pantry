require('dotenv').config();
import * as express from 'express';
import * as mongoose from 'mongoose';

const PORT = process.env.PORT || 3030;

const app = express();

const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI);

mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true })
	.then(() => console.log('MongoDB connected succesfully'))
	.catch((err) => console.log(err));

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});

import * as mongoose from 'mongoose';
import { ingredientFace } from './Ingredient';

export interface userFace extends mongoose.Document {
	name: string;
	email: string;
	passowrd: string;
	pantry?: [
		{
			ingredient: ingredientFace['_id'];
			stock: stock;
		}
	];
}

interface stock extends mongoose.Document {
	measure: {};
	quantity: number;
}

const userSchema: mongoose.Schema = new mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	pantry: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Ingredient',
			stock: {
				measure: {
					type: String,
					enum: [ 'g', 'mL', 'units' ]
				},
				quantity: {
					type: Number
				}
			}
		}
	]
});

export default mongoose.model<userFace>('User', userSchema);

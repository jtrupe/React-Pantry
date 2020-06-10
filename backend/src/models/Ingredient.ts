import * as mongoose from 'mongoose';

export interface ingredientFace extends mongoose.Document {
	ingredient: string;
}

const ingrdientSchema: mongoose.Schema = new mongoose.Schema({
	ingredient: {
		type: String,
		required: true
	}
});

export default mongoose.model<ingredientFace>('Ingredient', ingrdientSchema);

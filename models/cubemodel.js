const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Accessory = require('./accessory');


const cubeSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  description: String,
  imageUrl: String,
  difficultyLevel: Number,
  // accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessory'}]

})

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;


  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const codeSchema = new Schema({
  title: { type: String, required: true },
  userId: { type: Number, required: true },
  public: {type: Boolean, default: true},
  codeType: { type: String, required: true },
  snip: { type: String, required: true},
  snipTwo: { type: String, required: false},
  snipThree: { type: String, required: false},
  keywords: {type: String, required: true},
  dateCreated: { type: Date, default: Date.now },
  comments: {type: String, required: false}
});

const Codes = mongoose.model("Codes", codeSchema);

module.exports = Codes;

const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, maxLength: 500 },
  // owner: { type: Schema.Types.ObjectId, ref: "User" },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task", default: []}],
});

module.exports = model("Project", projectSchema);

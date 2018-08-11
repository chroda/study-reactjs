const restul = require('node-restful');
const mongoose = restul.mongoose;

const todoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = restul.model('Todo', todoSchema);

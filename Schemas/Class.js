const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    maxlength: 25
  },
  num_of_students: {
    type: Number,
  },
  participation: {
    type: Number,
  },
  student: [{ type: ObjectId, ref: 'Student' }],
  users: [{ type: ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Class', classSchema, 'classes');

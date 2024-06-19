const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  code: {
    type: String,
    required: [true, 'Please add a code'],
  },
  credits: {
    type: Number,
  },
});

module.exports = mongoose.model('Subject', SubjectSchema);

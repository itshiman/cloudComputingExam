const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salary111915047 = new Schema(
  {
    employee_id: {
      type: String,
    },
    jobRole: {
      type: String,
    },
    salary: {
      type: String,
    },
    bonus: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('salary111915047', salary111915047);

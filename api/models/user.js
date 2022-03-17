const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user111915047 = new Schema(
  {
    employee_id: {
      type: String,
    },
    password: {
      type: String,
    },
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    dob: {
      type: String,
    },
    contact: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('user111915047', user111915047);

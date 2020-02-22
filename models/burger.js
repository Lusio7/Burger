//models//
var orm = require("../config/orm");

const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
      // console.log("====================");
      // console.log("in models/burger.js selectAll: ", res);
    });
  },
  insertOne: function(cols, vals, cb){
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
      console.log("insertOne", res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res); 
      // console.log("updateOne", res);
    });
  },
  delete: function (condition, cb){
    orm.delete("burgers", condition, function(res) {
      cb(res);
      // console.log("delete", res);
    });
  }
};

module.exports = burger;
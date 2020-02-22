const connection = require("../config/connection");

function printQuestionMarks(num) {
  let arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  let arr = [];
  for (var key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

let orm = {
  //list all burgers
  selectAll: function(table, cb) {
    let queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      // console.log("====================");
      // console.log("in orm.js, selectAll: ", result);
    });
  },

  //insert new burger
  insertOne: function(table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table; 

    queryString += " (";
    queryString += "burger_name, devoured"; 
    queryString += ") ";
    queryString += "VALUES (";
    queryString += vals.toString();
    queryString += ") ";

    console.log("orm.js insertOne query string: ", queryString);
  

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log("insertOne: ", result);
    });
  },

  //update existing burger
  updateOne: function(table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objColVals;
    queryString += " WHERE ";
    queryString += condition;

    console.log("orm.js updateOne query string: ", queryString);
    console.log("objColVals", objColVals);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //delete existing burger
  delete: function(table, condition, cb) {
    let queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;
    // console.log("orm.delete function 'condition': ", condition);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
      // console.log("orm.js delete query string: ", queryString);

    });
  }
};

module.exports = orm; 
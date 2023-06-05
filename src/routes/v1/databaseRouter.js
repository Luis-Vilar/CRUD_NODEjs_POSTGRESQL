const routesDatabase = require("express").Router();
const {
  allUsers,
  createUser,
  deleteUser,
  updateUser,
  userById,
} = require("../../controllers/databaseController");
//allUsers
routesDatabase.get("/users", allUsers);
//userById
routesDatabase.get("/users/:id", userById);
//createUser
routesDatabase.post("/users", createUser);
//updateUser
routesDatabase.put("/users/:id", updateUser);
//deleteUser
routesDatabase.delete("/users/:id", deleteUser);

module.exports = routesDatabase;

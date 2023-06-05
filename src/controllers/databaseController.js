const pg = require("pg");
var pool = new pg.Pool({
  database: "testdb",
  user: "pgadmin",
  password: "Alone1983@",
  port: 5432,
});

module.exports = {
  //getAllUsers
  async allUsers(req, res) {
    const bdResponse = (await pool.query("SELECT * FROM users")).rows;
    return res.status(200).json({ allUser: bdResponse });
  },
  //getUserById
  async userById(req, res) {
    const { id } = req.params;
    const bdResponse = (
      await pool.query("SELECT * FROM users WHERE id = $1", [id])
    ).rows;
    return bdResponse.length !== 0
      ? res.status(200).json({ user: bdResponse })
      : res.status(404).json({ message: "User not found" });
  },
  //createUser
  async createUser(req, res) {
    const { name, email } = req.body;
    try {
      const bdResponse = (
        await pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [
          name,
          email,
        ])
      ).rows;
      return res.status(200).json({
        message: "User added to database",
        user: { name, email },
      });
    } catch (error) {
      return res.status(500).json({ message: "Error to create user" });
    }
  },
  //updateUser
  async updateUser(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;
    const bdResponse = (
      await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [
        name,
        email,
        id,
      ])
    ).rows;
    console.log(bdResponse);
    return res.status(200).json({ user: bdResponse });
  },
  //deleteUser
  async deleteUser(req, res) {
    const { id } = req.params;
    const bdResponse = (
      await pool.query("DELETE FROM users WHERE id = $1", [id])
    ).rows;
    return res.status(200).json({ user: bdResponse });
  },
};

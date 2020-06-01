const sequelize = require("../config/sequelize");
const { QueryTypes } = require("sequelize");

module.exports = {
  registerUser: async (data) => {
    try {
      const result = await sequelize.query(
        `INSERT INTO users (email, name, password, refresh_token) VALUES ($email, $name, $password, $refresh_token) RETURNING id, name`,
        {
          bind: {
            name: data.name,
            email: data.email,
            password: data.password,
            refresh_token: data.refresh_token,
          },
          type: QueryTypes.INSERT,
        }
      );
      return result;
    } catch (err) {
      return err;
    }
  },

  authUser: async (data) => {
    try {
      const result = await sequelize.query(
        `SELECT * FROM users WHERE email = $email`,
        {
          bind: {
            email: data.email,
          },
          type: QueryTypes.SELECT,
        }
      );
      return result;
    } catch (err) {
      return err;
    }
  },
};

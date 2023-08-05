module.exports = {
  client: "mysql2",
  connection: {
    database: "seliaApi",
    port: "6612",
    user: "root",
    password: "123",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

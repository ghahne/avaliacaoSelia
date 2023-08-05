/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("empresas", (table) => {
    table.increments("id").primary();
    table.string("razao_social", 45).notNullable();
    table.string("cnpj", 45).notNullable().unique();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("empresas");
};

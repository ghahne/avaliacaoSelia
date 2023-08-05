/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("funcionarios", (table) => {
    table.increments("id").primary();
    table.string("nome", 45).notNullable();
    table.string("cpf", 45).notNullable().unique();
    table.decimal("salario", 8, 2).notNullable();
    table.integer("empresa_id").notNullable().unsigned();

    table.foreign("empresa_id").references("id").inTable("empresa");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("funcionarios");
};

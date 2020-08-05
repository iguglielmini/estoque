
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('cpf').notNullable();
        table.string('telefone').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('filial').notNullable();
        table.string('perfil').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};


exports.up = function(knex) {
    return knex.schema.createTable('promocao', function (table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('categoria').notNullable();
        table.decimal('preco').notNullable();
        table.string('descricao').notNullable();
        table.date('dataInicio').notNullable();
        table.date('dataTermino').notNullable();
        table.boolean('promocaoAtiva').notNullable();
        table.string('imgProduto').notNullable();

        table.string('users_id').notNullable();

        table.foreign('users_id').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('promocao');
};

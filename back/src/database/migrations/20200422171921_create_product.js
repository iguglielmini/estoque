
exports.up = function (knex) {
    return knex.schema.createTable('product', function (table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('categoria').notNullable();
        table.decimal('preco').notNullable();
        table.string('descricao').notNullable();
        table.string('imgProduto').notNullable();

        table.string('users_id').notNullable();
        table.foreign('users_id').references('id').inTable('users');
    });

};

exports.down = function (knex) {
    return knex.schema.dropTable('product');
};

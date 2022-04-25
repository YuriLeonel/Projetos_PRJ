import { Knex } from 'knex'

// migrate para criação da tabela de itens de um determinado ponto
export async function up(knex: Knex){
    return knex.schema.createTable('point_items', table =>{
        table.increments('id').primary();

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}


// Remove a tabela
export async function down(knex: Knex){
    return knex.schema.dropTable('point_items');
}
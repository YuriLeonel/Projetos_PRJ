import { Knex } from 'knex'


// Migrate para subir a criação da tabela de items
export async function up(knex: Knex){
    return knex.schema.createTable('items', table =>{
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

// Remove a tabela
export async function down(knex: Knex){
    return knex.schema.dropTable('items');
}
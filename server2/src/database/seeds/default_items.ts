import { Knex } from 'knex'

// Seed dos itens default
export async function seed(knex: Knex){
    await knex('items').insert([
        {title: 'Lampadas',image:'lampada.png'},
        {title: 'Pilhas e Baterias',image:'pilha-seca.png'},
        {title: 'Papéis e Papelão',image:'reciclar-papel.png'},
        {title: 'Residuos Eletrônicos',image:'pilha-seca.png'},
        {title: 'Residuos Radioativos',image:'radioactive.png'},
        {title: 'Óleo de Cozinha',image:'oil.png'},
    ])
}
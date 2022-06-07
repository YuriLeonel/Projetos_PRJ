import Knex from 'knex'

export async function seed(knex:Knex) {

  await knex('items').insert([
    { title: 'Lâmpadas', image: 'lampadas.svg', desc: 'Utensílio destinado a produzir luz e que serve para iluminar'},
    { title: 'Pilhas e baterias', image: '../../../uploads/baterias.svg', desc: 'Pilhas e baterias são sistemas que por meio de reações químicas geram energia elétrica. Embora possam ser compradas em diversos lugares, o seu descarte não pode ser feito da mesma forma. Isso porque contém metais pesados e tóxicos, como chumbo, cádmio e mercúrio'},
    { title: 'Papéis e Papelão', image: '../../../uploads/papeis-papelao.svg', desc: 'O material do papelão vem dos papéis que têm fibras de celulose na composição. Esses papéis podem ser novos ou reciclado'},
    { title: 'Resíduos Eletrônicos', image: '../../../uploads/eletronicos.svg', desc: 'Resíduos eletroeletrônicos consistem em equipamentos eletroeletrônicos descartados ou obsoletos.'},
    { title: 'Resíduos Orgânicos', image: '../../../uploads/organicos.svg', desc: 'Os resíduos orgânicos são constituídos basicamente por restos de alimentos e resíduos de jardim descartados de atividades humanas.'},
    { title: 'Óleo de Cozinha', image: '../../../uploads/oleo.svg', desc: 'Você sabe a importância do descarte de óleo correto? Por seus efeitos danosos à rede de esgoto e ao meio ambiente, o óleo de cozinha não deve jamais ser jogado na pia ou nos bueiros.'},
  ]);

}

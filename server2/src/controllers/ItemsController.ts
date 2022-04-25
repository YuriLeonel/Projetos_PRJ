import {Request, Response} from 'express';
import knex from '../database/connection';



// Controlador responsável por buscar os itens do banco
class ItemsController {
    async index(request: Request, response: Response) {

        // Faz o select knex
        const items = await knex('items').select('*');
        
        // Define o tipo de objeto que será retornado
        const serializedItems = items.map((item: any) => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.100.13:3333/uploads/${item.image}`,
            };
        })
        
        // Retorna a lista de objetos com todos os itens para listar
        return response.json(serializedItems);
    }
}

export default ItemsController;
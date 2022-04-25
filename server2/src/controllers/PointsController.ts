import {Request, Response} from 'express';
import knex from '../database/connection';

// Controlador responsável pelos Pontos
class PointsController {

    // Função para buscar os pontos 
    async index(request: Request, response: Response){

        // Determina variáveis que serão utilizadas no processo.
        const { city, uf, items } = request.query;

        const parsedItems = String(items)
        .split(',')
        .map(item => Number(item.trim()));

        const points = await knex('points')
        .join('point_items', 'points.id', '=', 'point_items.point_id')
        .whereIn('point_items.item_id', parsedItems)
        .where('city', String(city))
        .where('uf', String(uf))
        .distinct()
        .select('points.*');

        const serializedPoints = points.map((point : any )=> {
            return {
                ...point,
                image_url: `http://192.168.100.13:3333/uploads/${point.image}`,
            };
        })
    

        return response.json(serializedPoints);
    }


    // Função paraa exibir os detalhes do ponto registrado
    async show(request: Request, response: Response){
        const {id} =request.params;

        // Query
        const point = await knex('points').where('id', id).first();

        if(!point){
            return response.status(400).json({message: 'Point not found.'});
        }

        const serializedPoint =  {
            ...point,
            image_url: `http://192.168.100.13:3333/uploads/${point.image}`,
        }

        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title');

        return response.json({point: serializedPoint, items});
    }

    // Função para criar um novo ponto no banco
    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;
    
        const trx = await knex.transaction();

        const point = {
            //image: request.file.filename,
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };
    
        const InsertedIds = await trx('points').insert(point);
    
        const point_id = InsertedIds[0];
    
        const poinItems = items
        .split(',')
        .map((item:string) => Number(item.trim()))
        .map((item_id: number) => {
            return {
                item_id,
                point_id,
            };
        })
    
        await trx('point_items').insert(poinItems);

        await trx.commit();
    
        return response.json({
            id: point_id,
            ...point,
        });
    };
};
export default PointsController;
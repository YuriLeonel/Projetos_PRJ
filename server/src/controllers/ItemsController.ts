import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }


  // Método para consultar a descrição.
  async getDesc(request: Request, response: Response){
    const { id } = request.params;

    const desc = await knex("items").where("id", id).first();

    if (!desc) {
      return response.status(400).json({ message: "Item description not found." });
    }

    const serializedItem = {
      ...desc
    }

    return response.json({desc: serializedItem});

  }

}

export default ItemsController;

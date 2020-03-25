import { connection } from "../database/connection";
import crypto from "crypto";
import { Request, Response } from "express";

export namespace OngController {
    export async function index(request: Request, response: Response): Promise<Response<any>> {
        const ongs = await connection("ongs").select("*");
    
        return response.json(ongs);
    }

    export async function create(request: Request, response: Response): Promise<Response<any>> {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString("HEX");

        await connection("ongs").insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        
        return response.json({ id });
    }
}
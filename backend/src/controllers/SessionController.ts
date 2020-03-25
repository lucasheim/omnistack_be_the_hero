import { connection } from "../database/connection";
import { Request, Response } from "express";

export namespace SessionController {
    export async function create(request: Request, response: Response): Promise<Response<any>> {
        const { id } = request.body;

        const ong = await connection("ongs").where("id", id).select("name").first();

        if (!ong) {
            return response.status(400).json({ error: "No ONG found with this ID" });
        }

        return response.json(ong);
    }
}
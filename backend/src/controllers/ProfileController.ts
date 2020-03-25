import { connection } from "../database/connection";
import { Request, Response } from "express";

export namespace ProfileController {
    export async function index(request: Request, response: Response): Promise<Response<any>> {
        const ong_id = request.headers.authorization;

        const incidents = await connection("incidents")
                                .where("ong_id", ong_id)
                                .select("*");

        return response.json(incidents);
    }
}
import {SaleService} from "../services/SaleService";
import {Request,Response} from "express";

class SaleController{
    saleService = new SaleService();

    async createSale(request:Request,response:Response){
        const {productId,userId,total,desc,obs} = request.body;
        const sale = await this.saleService.createSale({
            productId, userId, total, desc, obs
        })

        return response.json(sale);
    }

    async listSale(request:Request,response:Response){
        const sales = await this.saleService.listSale();
        return response.json(sales);
    }

    async updateSale(request:Request, response:Response){
        const {
            id, productId, userId, total, desc, obs
        } = request.body;

        const sale = await this.saleService.updateSale({
            id, productId, userId, total, desc, obs
        })

        return response.json(sale);
    }

    async deleteSale(request:Request, response:Response){
        const id = request.params.id;
        const sale = await this.saleService.deleteSale({id});
        return response.json(sale);
    }
}

export {SaleController}
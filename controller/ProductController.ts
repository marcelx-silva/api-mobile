import {ProductService} from "../services/ProductService";
import {Request,Response} from "express";

class ProductController{
    productService = new ProductService();

    async createProduct(request:Request,response:Response){
        const {name,description,img,price} = request.body;
        const product = await this.productService.createProduct({
            name,description,img,price
        });

        return response.json(product);
    }

    async listProduct(request:Request,response:Response){
        const products = await this.productService.listProduct();
        return response.json(products);
    }

    async updateProduct(request:Request,response:Response){
        const {
            id, name, description, img, price
        } = request.body;

        const product = await this.productService.updateProduct({
            id, name, description, img, price
        });

        return response.json(product);
    }

    async deleteProduct(request:Request,response:Response){
        const id = request.params.id;
        const product = await this.productService.deleteProduct({id});
        return response.json(product);
    }
}

export {ProductController}
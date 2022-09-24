import {CategoryService} from "../services/CategoryService";
import {Request,Response} from 'express';

class CategoryController{
    categoryService = new CategoryService();

    async createCategory(request:Request,response:Response){
        const {name} = request.body;
        const category = await this.categoryService.createCategory({
            name
        });

        return response.json(category);
    }

    async listCategory(request:Request,response:Response){
        const categories = await this.categoryService.listCategory();
        return response.json(categories);
    }

    async updateCategory(request:Request,response:Response){
        const {
            id,name
        } = request.body;

        const category = await this.categoryService.updateCategory({
            id,name
        });

        return response.json(category);
    }

    async deleteCategory(request:Request,response:Response){
        const id = request.params.id;
        const category = await this.categoryService.deleteCategory({id});
        return response.json(category);
    }
}

export {CategoryController}
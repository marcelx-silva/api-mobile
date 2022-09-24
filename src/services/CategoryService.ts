import {classToPlain} from "class-transformer";

interface ICategoryRequest{
    name:string;
}

interface ICategoryUpdate{
    id:string;
    name:string;
}

interface ICategoryDelete{
    id:string;
}

class CategoryService {
    async createCategory({name}:ICategoryRequest){
        if(!name){
            throw new Error("Nome vazio!");
        }
        let vCategory = {
            name:"Informática"
        }

        return vCategory;
    }

    async listCategory(){
        const categorySet = [
            {
                "id":"1",
                "nome":"Livro"
            },
            {
                "id":"2",
                "nome":"Eletrodoméstico"
            },
            {
                "id":"3",
                "nome":"Roupa"
            }
        ]

        return classToPlain(categorySet);
    }

    async updateCategory({id,name}:ICategoryUpdate){
        if(!id || !name){
            throw new Error("Campo Obrigatório!");
        }

        let vCategory = {name:name}

        return vCategory;
    }

    async deleteCategory({id}:ICategoryDelete){
        return {
            message: "Categoria excluida com sucesso!"
        };
    }
}

export {CategoryService}
import {classToPlain} from "class-transformer";

interface IProductRequest{
    name:string;
    description:string;
    img:string;
    price:number;
}

interface IProductUpdate{
    id:string;
    name:string;
    description:string;
    img:string;
    price:number;
}

interface IProductDelete{
    id:string;
}

class ProductService{
    async createProduct({name,description,img,price}:IProductRequest){
        if(!name || !img || !price){
            throw new Error("Preencha os campos!");
        }

        return{
            name:name,
            description:description,
            img:img,
            price:price
        }
    }

    async listProduct(){
        const productSet = [
            {
                "id":"1",
                "name":"Tênis Shuffle Mid",
                "description":"O tênis PUMA Shuffle Mid traz uma nova interpretação da silhueta clássica do basquete dos anos 80",
                "img":"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/387666/01/sv01/fnd/BRA/w/1000/h/1000/fmt/png",
                "price":349.90

            }
        ]

        return classToPlain(productSet);
    }

    async updateProduct({id,name,description,img,price}:IProductUpdate){
        if(!id || !name || !img || !price){
            throw new Error("Campos Obrigatorios!");
        }
        return{
            name:name,
            description:description,
            img:img,
            price:price
        }
    }

    async deleteProduct({id}:IProductDelete){
        return {
            message: "Produto excluido com sucesso!"
        };
    }
}

export {ProductService}
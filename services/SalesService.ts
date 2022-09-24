import {classToPlain} from "class-transformer";

interface ISaleRequest{
    productId:string;
    userId:string;
    total:number;
    desc:number;
    obs:string;
}

interface ISaleUpdate{
    id:string;
    productId:string;
    userId:string;
    total:number;
    desc:number;
    obs:string;
}

interface ISaleDelete {
    id:string;
}

class SaleService{
    async createSale({productId,userId,total,desc,obs}:ISaleRequest){
        if(!productId || !userId || !total || !desc){
            throw new Error("Preencha os campos");
        }

        return{
            productId:productId,
            userId:userId,
            total:total,
            desc:desc,
            obs:obs
        }
    }

    async listSale(){
        const saleSet = [{}];
        return classToPlain(saleSet);
    }

    async updateSale({id,productId,userId,total,desc,obs}:ISaleUpdate){
        if(!id || !productId || !userId || !total || !desc){
            throw new Error("Campos Obrigatorios!");
        }

        return{
            productId:productId,
            userId:userId,
            total:total,
            desc:desc,
            obs:obs
        }
    }

    async deleteSale({id}:ISaleDelete){
        return{
            message: "Venda excluida com sucesso!"
        }
    }
}

export {SaleService}
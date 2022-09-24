import {hash} from "bcryptjs";
import {classToPlain} from "class-transformer";

interface IUserRequest{
    name:string;
    email:string;
    admin?:boolean;
    password:string;
}

interface IUserUpdate{
    id:string;
    name:string;
    email:string;
    admin?:boolean;
    password:string;
}

interface IUserDelete{
    id:string;
}

class UserService{
    async createUser({name,email,admin=false,password}:IUserRequest){
        if(!email || !name || !password){
            throw new Error("Preencha todos os campos!");
        }
        const passwordHash = await hash(password,8);

        let vUser = {
            name:name,
            email:email,
            admin:false,
            password:passwordHash
        }

        return vUser;
    }

    async listUser(){
        const userSet = [{
            "id": "1",
            "nome": "Usario 01",
            "email": "fcd@gmail.com",
            "admin": "1",
            "password": "xxxxxx",
            "status": "Ativo"
        },
            {
                "id": "2",
                "nome": "Usario 02",
                "email": "fcder@gmail.com",
                "admin": "0",
                "password": "xxxxxx",
                "status": "Ativo"
            } ]

        return classToPlain(userSet);
    }

    async updateUser({id,name,email,admin=false,password}:IUserUpdate){
        if (!id || !name || !email || !password) {
            throw new Error("Campos Obrigatórios!");
        }
        const passwordHash = await hash(password, 8)

        let vUser = {
            name:name,
            email:email,
            admin:admin,
            password:passwordHash
        }
        return vUser;
    }

    async deleteUser({id}:IUserDelete){
        return {
            message: "Usuário excluido com sucesso!"
        };
    }

}



export {UserService}
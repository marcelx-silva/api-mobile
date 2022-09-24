import {UserService} from "../services/UserService";
import {Request,Response} from "express";


class UserController{
    userService = new UserService();
    async createUser(request:Request,response:Response){
        const {name,email,admin,password} = request.body;
        const user = await this.userService.createUser({
            name,
            email,
            admin,
            password,
        });

        return response.json(user);
    }

    async listUser(request:Request,response:Response){
        const users = await this.userService.listUser();
        return response.json(users);
    }

    async updateUser(request:Request,response:Response){
        const {
            id, name, email, admin, password
        } = request.body;

        const user = await this.userService.updateUser({
            id, name, email, admin, password,
        });

        return response.json(user);
    }

    async deleteUser(request:Request,response:Response ){
        const id = request.params.id;
        const user = await this.userService.deleteUser({id});
        return response.json(user);
    }
}

export {UserController}
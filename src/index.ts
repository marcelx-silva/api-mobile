import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Category} from "./entity/Category";

createConnection().then(async connection => {

    console.log("Inserting a new Category into the database...");
    const category = new Category("Informática");
    await connection.manager.save(category);
    console.log("Saved a new category with id: " + connection.manager.getId(category));

    console.log("Loading categories from the database...");
    const categories = await connection.manager.find(Category);
    console.log("Loaded users: ", categories);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));

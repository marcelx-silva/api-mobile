import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection().then(r => {
    console.log("Conectado...");
});
import {Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";

@Entity("Categories")
class Category{

    constructor(id:string, name:string) {
        this._id = id;
        this._name = name;
    }

    @PrimaryGeneratedColumn("uuid")
    private readonly _id:string;

    @Column({
        length:35
    })
    private _name:string;

    get getId():string{
        return this._id;
    }

    get getNome():string{
        return this._name;
    }

    set setNome(name:string){
        this._name = name;
    }
}
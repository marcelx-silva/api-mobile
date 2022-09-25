import {Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";

@Entity("Categories")
class Category{

    constructor(name:string) {
        this._name = name;
    }

    @PrimaryGeneratedColumn("uuid")
    private readonly id: string | undefined;

    @Column({
        length:35
    })
    private _name:string;

    get getId():string | undefined{
        return <string>this.id;
    }

    get getNome():string{
        return this._name;
    }

    set setNome(name:string){
        this._name = name;
    }
}

export {Category}
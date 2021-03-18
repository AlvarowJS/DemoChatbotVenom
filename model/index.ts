import { iBase } from "../interface";

export abstract class Base implements iBase{
    _id : number = 0;
    abstract name_table: string;
    findOne(id: number): Promise<void> {
        return new Promise((resolve) => {
            console.log('SELECT * FROM ${this.name_table} WHERE _id = ${id}');
            resolve();
        });
    }
}


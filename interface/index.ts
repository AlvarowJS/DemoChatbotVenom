export interface iBase {
    _id : number;
    name_table: string;
    findOne(id: number): Promise<void>;
}

export interface iConfigDB {
    host: string;
    user: string;
    password: string;
    database: string;
}
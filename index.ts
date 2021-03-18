import { connectOFF, connectON } from "./dao/mysql";
import { Base } from "./model";

class Person extends Base{
    name_table: string = "person";

}

class Cliente extends Base {
    name_table: string = "cliente";
}
(async ()=>{
    await connectON({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "mini_orm",
    });
    //let p1 = new Person();
    //await p1.findOne(1);
    let c1 = new Cliente();
    c1.findOne(19);

    await connectOFF();
})();
import {createPool, Pool} from "mysql";
import { iConfigDB } from "../interface";

let _Pool : Pool;

export function connectON(config: iConfigDB): Promise<Boolean> {
    return new Promise((resolve) => {
        _Pool = createPool(config);

        _Pool.getConnection((error, conexion) => {
            if(error){
                console.log("Conexion failed");
                resolve(false);
            }
            else{
                console.log("conexion success");
                resolve(true);
            }
        });
    });  

}
export function connectOFF():Promise<Boolean>{
    return new Promise((resolve) => {
        if (_Pool) {
          console.log("conexion close");
          _Pool.end();
        }
        resolve(true);
    });

}
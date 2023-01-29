import mongoose from "mongoose"
import { IDatabase } from "./database.interface";
export class Database implements IDatabase {
    

    async init():Promise<void>{
        mongoose.set('strictQuery', false)
        try {
            await mongoose.connect("mongodb+srv://admin:wwwwww@cluster0.n0kvmkz.mongodb.net/blog?retryWrites=true&w=majority")
            console.log("Подключена база данных")  
        } catch (error) {
            if(error instanceof Error){
                console.error(error.message)
            }
        }
    }
}
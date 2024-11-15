import "reflect-metadata";
import { DataSource } from "typeorm";
import { Ropa } from "./entities/Ropa";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Ropa],
  migrations:[],
  subscribers:[]
});
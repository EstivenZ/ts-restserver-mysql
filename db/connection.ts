import {Sequelize} from "sequelize";

const db= new Sequelize('cursonode','root', '12345',{
    host: 'localhost',
    dialect: 'mysql',
   // logging: false
});

export default db;
import { Sequelize } from "sequelize"
import db from "../config/database.js"

const DataSosial = db.define("sosial", {
    S1: Sequelize.FLOAT,
    S2: Sequelize.FLOAT,
}, {
    freezeTableName: true 
});


// (async () => {
//   await db.sync();
// })();

db.sync().then(() => console.log("Database Synchronized"))

export default DataSosial;
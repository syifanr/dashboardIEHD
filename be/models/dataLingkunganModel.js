import { Sequelize } from "sequelize"
import db from "../config/database.js"

const DataLingkungan = db.define("lingkungan", {
    L1: Sequelize.FLOAT,
    L2: Sequelize.FLOAT,
    L3: Sequelize.FLOAT,
}, {
    freezeTableName: true 
});


// (async () => {
//   await db.sync();
// })();

db.sync().then(() => console.log("Database Synchronized"))

export default DataLingkungan;
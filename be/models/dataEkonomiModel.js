import { Sequelize } from "sequelize"
import db from "../config/database.js"

const DataEkonomi = db.define("ekonomi", {
    E1: Sequelize.FLOAT,
    E2: Sequelize.FLOAT,
    E3: Sequelize.FLOAT,
    E4: Sequelize.FLOAT,
    E5: Sequelize.FLOAT,
}, {
    freezeTableName: true 
});


// (async () => {
//   await db.sync();
// })();

db.sync().then(() => console.log("Database Synchronized"))

export default DataEkonomi;
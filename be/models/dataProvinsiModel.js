import { Sequelize } from "sequelize"
import db from "../config/database.js"

const DataProvinsi = db.define("provinsi", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    province_code: Sequelize.INTEGER,
    province_name: Sequelize.STRING,
    freezeTableName: true // <- penting ini!
});


// (async () => {
//   await db.sync();
// })();

db.sync().then(() => console.log("Database Synchronized"))

export default DataProvinsi;
import { Sequelize } from "sequelize"
import db from "../config/database.js"

const DataEkonomi = db.define("ekonomi", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    E1: Sequelize.STRING,
    E2: Sequelize.STRING,
    E3: Sequelize.INTEGER,
    E4: Sequelize.INTEGER,
    E5: Sequelize.STRING,
}, {
    freezeTableName: true // <- penting ini!
});


// (async () => {
//   await db.sync();
// })();

db.sync().then(() => console.log("Database Synchronized"))

export default DataEkonomi;
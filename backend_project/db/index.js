const Sequelize = require("sequelize");
// new Sequelize("имя базы данных", "имя пользрвателя", "пароль",
const sequelize =  new Sequelize("mfdoors_nodeusers", "mfdoors_nodeusers", "((Z9rknF88", {
    dialect: "mysql",
    host: "mfdoors.mysql.tools"
});

// const Notes = require('./notes')(sequelize);
const Users = require('./users')(sequelize);

module.exports = {
    sequelize : sequelize,
    users : Users
}
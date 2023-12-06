const envs  = require('./../environments.js')
const  { Sequelize, DataTypes }  =  require("sequelize");

const POSTGRES_URL = envs.DATABASE_URL;
const sequelize = new Sequelize(POSTGRES_URL);

async function connectDB() {
  try {
 
    await sequelize.authenticate();
    if(envs.POSTGRES_DB=="dev_keep_notes")
       console.log("✅ connected to dev db ");
     if(envs.POSTGRES_DB=="test_keep_notes")
        console.log("✅  connected to test db  ");
    
    if(envs.POSTGRES_DB=="prod_keep_notes")
        console.log("✅  connected to prod  db ");
        


    } catch (error) {
    console.error("Unable to connect to the databa-se:", error);
  }
}


module.exports =  { connectDB, sequelize, Sequelize, DataTypes };

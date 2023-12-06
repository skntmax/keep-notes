const  express =  require('express')
const  dotenv =   require('dotenv')
const envs = require('./environments') 
const {connectDB} = require('./connection/db')
dotenv.config()
let app = express()
let port =  envs.PORT || 2000 

connectDB()

// if (process.env.NODE_ENV === "development") app.use(morgan("dev"));



app.get("/api/healthchecker", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Build CRUD API with Node.js and Sequelize",
  });
});

 
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Route: ${req.originalUrl} does not exist on this server`,
  });
});


 
app.listen(port , ()=>{
     console.log(` server started at ${port}`)
})

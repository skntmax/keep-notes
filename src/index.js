const  express =  require('express')
const  dotenv =   require('dotenv')
const envs = require('./environments') 

dotenv.config()
let app = express()
let port =  envs.PORT || 2000 

app.get('/' , ()=> {
  
})


app.listen(port , ()=>{
     console.log(` server started at ${port}`)
})

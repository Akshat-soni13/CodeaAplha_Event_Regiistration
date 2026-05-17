require("dotenv").config()
const app = require("./src/app")
const connectTodb = require("./src/config/databse")



connectTodb()




app.listen(3000,()=>{
    console.log("Server is ruuning on port 3000")
})
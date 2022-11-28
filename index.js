const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const Register=require("./registerschema.js")
const mongoose=require("mongoose")
const port=4000;
console.log(Register)
app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://SavithriGanta:Savithri257@cluster0.ucoybc2.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
	console.log("created mongodb database")
})
.catch((err)=>{
	console.log(err)
})
app.post("/register",(req,res)=>{
	//const {username,password}=req.body
	const username="dummyuser",password="dummyoassword"
	const newUser=new Register({
		username:username,
		password:password
	})
	newUser.save()
})
app.listen(port,()=>console.log("server is started"))
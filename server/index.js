const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/crud')
    .then(()=>{
        console.log('connect to DB');
    })
    .catch((error)=>{
        console.log(error);
    })

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const UserModel=mongoose.model("users",UserSchema);

app.post('/createUser',(req,res)=>{
    // const user=req.body;
    // console.log(user);
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err => res.json(err))
    // User
})

app.get('/getUser',(req,res)=>{
    UserModel.find({})
    .then(user =>res.json(user))
    .catch(err =>res.json(err))
})

app.get('/Updating/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById(id)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    const {name,email,age}=req.body;
    UserModel.findByIdAndUpdate(id,{name,email,age})
    .then(user=>res.json(user))
    .catch(err => res.json(err))
})

app.delete('/deleting/:id' ,(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log("Running Server");
})
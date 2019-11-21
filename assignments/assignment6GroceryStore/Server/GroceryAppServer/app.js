var MongoClient=require('mongodb').MongoClient;
var express=require('express');
const bodyPar=require('body-parser');
const app=express();
var cors=require('cors');
// const port=3000;
var url="mongodb://127.0.0.1:27017/";
app.use(bodyPar.urlencoded({extended : true}));
app.use(cors());
let arr=[];
app.use(express.json());
app.get('/getdetails',(req,res)=>
{
  console.log("items details get ");
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("kunal_db");

    console.log("connected");
    dbo.collection("Item_Details").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
  });
  
})
});

app.post('/addToCart',(req,res)=>
{
  console.log("testing ");

  console.log(req.body);
  res.send("cool");
  
  // MongoClient.connect(url,function(err,db){
  //   var dbo=db.db("kunal_db");

  //   dbo.collection("CartItems").insert(req.body);
  //   db.close();

  // })
});

  app.get('/getAddCartItems',(req,res)=>
  {
    console.log("inside getCart");
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("kunal_db");
  
      console.log("connected");
      dbo.collection("CartItems").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
    });
    
  })
  });  
  console.log("INside get app server side");
  
   


// app.get('/fetchDetails',(req,res)=>{
//     res.send([{"id":1,"name":"Mutton","Price":530,"Unit":"PerKg","Image":"../assets/Image/Mutton.jpg"},
//     {"id":2,"name":"Chicken","Price":200,"Unit":"PerKg","Image":"../assets/Image/Chicken.jpg"},
//     {"id":3,"name":"Potato","Price":30,"Unit":"PerKg","Image":"../assets/Image/Potato.jpg"},
//     {"id":5,"name":"Onion","Price":50,"Unit":"PerKg","Image":"../assets/Image/Onion.jpg"},
//     {"id":6,"name":"Egg","Price":30,"Unit":"Pack of Six","Image":"../assets/Image/Egg.jpg"},
//     {"id":7,"name":"Tomato","Price":35,"Unit":"PerKg","Image":"../assets/Image/Tomato.jpg"},
//     {"id":8,"name":"Banana","Price":40,"Unit":"PerKg","Image":"../assets/Image/Banana.jpg"}]);
   

//     // res.send("welcome to page");

//   });
  app.get('/',(req,res)=>
  {
    res.send("welcome to the default server apge");
  });

app.listen(3000,()=>
{
  console.log("server connected");
});

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

 function getMail(jsonObj){
   console.log("There is some kindof error");
   return new Promise(function(resolve,reject){
    MongoClient.connect(url,function(err,db){
      console.log("first line in promise");
      if(err){
        console.log("Mongodb client not connect");
        // return res.status(230).send({
      
        //   message: 'There is database error'
        // })
        reject(err);
      }
      else{
        console.log("no error and checking for element");
      var dbo=db.db("Tutorial_Online");
       
      totalcount=  dbo.collection("Users_Credentials").find({email:jsonObj})
      .toArray(function(err,data){

        if(data){
        resolve(data);
        
        }
        if(err){
          console.log("error inside toArray");
        }
        
      });
      console.log("after connnection and ready to close");
     
       db.close();
      }
  })
   })



}

app.post('/Login',(req,res)=>{
  //check whether the email is linked with current registered mails
  getMail(req.body['email']).then(function(data){
    if(data.length===0){
      console.log("Email id doesn't exist");
      return res.status(400).send({
        message: 'No EmailId linked'
      })
    }
    else{
      //Check for credentials and if true Redirect to Homepage
      //if credentials doesn't match
      return res.status(400).send({
        message: 'PasswordIncorrect'
      })
      //Code for succesful registration ... 
      //Code to check password will be updated afterwards
      console.log("redirect to homepage");
      return res.status(100).send({
        message: 'Login succesful'
      })
    }
  }).catch(err=>{
    return res.status(502).send({
      message: "there is database side error"
    })
  })
})
// Sign Up for Registration
app.post('/SignUp',(req,res)=>
{
  var jsonObj=req.body['email'];
  getMail(jsonObj).then(function(data){
    
    console.log("data is ",data);
    console.log("Length is " ,data.length);
    if(data.length>0){
      return res.status(400).send({
        message: 'This is an error!'
     });
    }
    else{
      MongoClient.connect(url,function(err,db){
        if(err){
          return res.status(502).send({
            message: 'there is database side error'
          })
        }
        else{
          var dbo=db.db("Tutorial_Online");
          console.log("Data is ");
        let k=dbo.collection("Users_Credentials").insert(req.body);
        db.close();
        
        k.then(function(insertedData){
          console.log("New email id inserted");
          console.log("Credentials entered is ",insertedData);
          return res.send(req.body['email']);
        }).catch(err=>{
          res.status(502).send({
            message:"Error while inserting data"
          })
        })
        return res.send(data);
        }
        
        
    
      })
    }
  })
  .catch(err=>{
    return res.status(502).send({
      message: "there is database side error"
    })
  })
})



  
  app.get('/',(req,res)=>
  {
    res.send("welcome to the default server apge");
  });

app.listen(3000,()=>
{
  console.log("server connected");
});

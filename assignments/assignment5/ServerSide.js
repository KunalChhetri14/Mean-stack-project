var http=require('http');
let qs=require('querystring');
var server=http.createServer((req,res)=>
{
    
     
        

//    if(req.url==='/')
//    {
//        console.log("inside / ")
//    }

//    else if(req.url==='/favicon.ico')
//    {
//        console.log("inside favicon");
//    }

//    else{
//        console.log("Inside else ");
//    }

    //let promise=new Promise();
    let body="";
    let post="";
        req.on('data',(data)=>
    {
        console.log(`Data chunk available is ${data}`)
        body=data.toString();
        //post=qs.parse(body);
        // console.log(post);
        console.log("chunk arrived");
        //resolve(body);
    });
    



    
    var labVal="";
    let k=""
    req.on('end',()=>
    {
        //post = qs.parse(body);
        //var k=post.get('labelField');
        //labVal=post['labelField'];
        //console.log(qs.parse(body));
        //console.log(req.params);
        k=body.replace('%2B','+');
        console.log(eval(k));
        console.log("data ended");
        //res.end(eval(k));
    });

    
    //console.log(post);
    //console.log(req.url);

   
    res.end("CHeck console for output");
    //console.log("COll head");
    
   

});

server.listen('3000');
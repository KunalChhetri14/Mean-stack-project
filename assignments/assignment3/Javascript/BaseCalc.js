//import {ParentClass} from './ParentClass'
baseObj=null;

// const lib=require('./ParentClass');
displayBase=function()
{
    alert("kunal");
    document.getElementById('ScientificCalc').style="display:none;";
    document.getElementById('BaseCalc').style="visibility:visible";
    document.getElementById('base').setAttribute("class","btn btn-success");
    document.getElementById('scientific').setAttribute("class","btn btn-danger");
}

CallObject=function(val)
{
    if(!baseObj)
    {
        //alert("fisrt time object creations");
        baseObj=new BaseCalc();
        baseObj.display(val);

            //alert("first time object creation");
            //alert("inside calc");
    }
    
    //alert("you are inside call" + val.value);
   

   else
   {
      //alert("second time object creation");
      baseObj.display(val);
   }
}

class BaseCalc
{
    operatorStatus=false;
    labelvalue="";
    operandStatus=false;
    CalculatedResult="";

    constructor() {
        //super();
        this.operatorStatus=false
        this.labelvalue="";
        this.operandStatus=true;
        //alert("kjfdlk");
    }

  


    display(a)
   {
       //alert("INdised dislay");
    
        // says whether we can
    // input a operator or not eg after '+' again another operator shouldn't be allowed
      let val=a.value;
      
      //alert("cool");
      //alert(val);
      //console.log(`firs array a is ${stackNo} and append is ${appendStatus}`);
      if(val=='+' || val=='/' || val=='*' || val=='-')
      {

        //alert("Inside operator selection"+this.operatorStatus);
          if(this.operatorStatus)
          {
           // alert("inside operator satsus");
            this.labelvalue+=val;
            this.operatorStatus=false;
            this.operandStatus=true;
          }
        
      }

      else if(val=='X')
      {
        
         if(this.labelvalue.length==0)
         {
            return;
         }

         else 
         {
            //alert("inside x");
            if(this.labelvalue==this.CalculatedResult)
            {
               // alert("here it is same");
                this.operandStatus=false;
                this.operatorStatus=true;
            }

            
            else
            {
                let last=this.labelvalue.substring(this.labelvalue.length-1,this.labelvalue.length);
                if(last=='+' || last=='-' || last=='*' || last=='/')
                {
                    this.operatorStatus=true;
                }
                this.labelvalue=this.labelvalue.slice(0,-1);
            }
            
            // console.log("Contents inside stackNO is " + stackNo);
            // if(stackNo[0]<=0)
            // {
            //    stackNo.pop();
            //    labelvalue=0;
            // }
            // else
            // {
               
            //    stackNo[0]=Math.floor(stackNo[0]/10);
               
            //    console.log("t the asdlfk "+ stackNo[0]);
            //    labelvalue=stackNo[0];
            // }
         }

        //  else if(stackNo.length==2)
        //  {
        //     stackNo.pop();
        //     labelvalue=labelvalue.slice(0,-1);
        //  }

        //  else
        //  {
        //     if(stackNo[2]<=0)
        //     {
        //        stackNo.pop();
        //        labelvalue=0;
        //     }
        //     else
        //     {
               
        //        stackNo[2]=Math.floor(stackNo[2]/10);
               
        //        console.log("t the asdlfk "+ stackNo[2]);
        //        labelvalue=labelvalue.slice(0,-1);
        //     }
        //  }
      }
      else if(val=='=')
      {
        let lastCharacter=this.labelvalue.substring(this.labelvalue.length-1,this.labelvalue.length);
        if(lastCharacter=='+' || lastCharacter=='-' || lastCharacter=='*' || lastCharacter=='/')
        {
            this.labelvalue=labelvalue.substring(0,this.labelvalue.length-1);
        }
        console.log("outside = value "+this.labelvalue);
        // promise1.bind(this);
        var promise1=new Promise(function(resolve,reject){
          console.log("label value is "+this.labelvalue);
            setTimeout(() => {
                alert("Before indide eval");
                this.labelvalue=eval(this.labelvalue);
                alert("After indide eval");
                return this.labelvalue;
            }, 1000);//eval(this.labelvalue);
        });

        this.labelvalue=eval(this.labelvalue);
        
        this.CalculatedResult=this.labelvalue;
        this.operatorStatus=true;
        this.operandStatus=false;
        
         //alert("inside match");
        //  if(stackNo.length==3)
        //  {
        //     var choice=stackNo[1];
        //     //prompt(choice);
            
        //     stackNo[0]=this.myFunction(choice);
        //     stackNo.pop();
        //     stackNo.pop();
        //     if(val!='=')
        //     {
        //        stackNo.push(val);
        //     }
        //     console.log(stackNo[0]);
        //     labelvalue=stackNo[0];
        //  }
        //  else
        //  {
        //     return;
        //  }
      }
      // console.log(typeof(val));
      // console.log(val);
      // if(val=='=')
      // {
      //    if(stackNo[1]=='+')
      //    {
      //       stackNo[0]=this.calculate(stackNo[0],stackNo[2],this.sum);
      //       labelvalue=stackNo[0];
      //       tail=0;
      //       console.log(labelvalue);
      //    }
      // }

   
    //   else if(val=='+' || val=='*' || val=='/' || val=='-')
    //   {
    //      // if(stackNo[1]=='+')
    //      // {
    //      //    stackNo[0]=this.calculate(stackNo[0],stackNo[2],this.sum);
    //      //    labelvalue=stackNo[0];
    //      // }
    //      // else{
    //      //    stackNo.push('+');
    //      // }
    //      if(stackNo.length==1)
    //      {
    //         console.log("12 should be followed by + as second element");
    //         stackNo.push(val);
    //         appendStatus=false;
    //         labelvalue+=val;
    //      }

         
    //      else if(stackNo.length==3)
    //      {
    //         stackNo[0]=this.myFunction(stackNo[1]);
    //         stackNo[1]=val;
    //         stackNo.pop();
    //         labelvalue=stackNo[0]+val;

    //      }

    //      else
    //      {
    //         return;
    //      }
    //   }

      else if(val==='C')
      {
        //  console.log(stackNo);
         
        //  if(stackNo.length>0)
        //  {
            
        //     for(var i=0;i<stackNo.length;i++)
        //     {
              
        //        stackNo.pop();
        //     }
        //  }
        //  tail=0;
         this.labelvalue="";
         this.operandStatus=true;
         this.operatorStatus=false;
      }
      else
      { 
        //alert("inside number");
        if(this.labelvalue==this.CalculatedResult && this.labelvalue!="")
        {
            return;
        }
        console.log(`Before concat ${this.labelvalue}`);
        if(this.operandStatus)
        {
            this.labelvalue=this.labelvalue+val; // can't concat after carrying = operation
        }
        
        console.log(`Afer concat ${this.labelvalue}`);
        this.operatorStatus=true;
        //  console.log(" Append status inside number is "+ appendStatus);
        //  val=parseInt(val);
         
         
         // console.log("the no is " + val);
         // console.log("The type arr"+typeof(stackNo[stackNo.length-1]));
        //  if(typeof(stackNo[stackNo.length-1])==='number' && tail!=0)
        //  {
        //     //console.log ("Insdie");
        //     if(appendStatus)
        //     {
              
        //        console.log("12 should be inserted");
        //        let insertEle=stackNo[stackNo.length-1]*10+val;
        //        console.log(insertEle);
        //        stackNo[stackNo.length-1]=insertEle;
        //        console.log(stackNo);
        //     }

        //     else 
        //     {
        //        //console.log("append status flas")
               
        //        stackNo.push(val);
        //        appendStatus=true;
        //     }
            
            
        //     labelvalue+=val;
            
        //  }

        
        //  else
        //  {
        //     console.log(" 1 should be inserted");
        //     appendStatus=true;
        //     stackNo.push(val);
        //     labelvalue+=val;
        //     console.log(stackNo[Array.length-1]);
        //     tail+=1;
        //  }
      } 
      
      // labelvalue=labelvalue+a.value;
      if(val=='=')
      {
        promise1.then(function(value)
        {
          alert("Yes as promised")
        });

        promise1.catch()
        {
          console.log("inside catch of promise");
        }

        // promise1.reject(function(reason){
        //     alert(reason);
        // });
      }

      else{
        document.getElementById("resultLabel").innerHTML=this.labelvalue;
     }
      
      // console.log("paerjr " +a.value);
      console.log("Array elements is "+ this.labelvalue);
    }

    
}
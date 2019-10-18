labelvalue="";
stackNo=[];
tail=0;
appendStatus=true;
parentObj=null;

CallObject=function(val)
{
   if(!parentObj)
   {
      //alert("first time object creation");
      parentObj=new Parent();
      parentObj.display(val);
   }
   else
   {
      //alert("second time object creation");
      parentObj.display(val);
   }
}
//classObj=new Parent();
class Parent
{
   
  
   calculate=function(a,b,callback)
   {
      return callback(a,b);
   }
   sum=function(a,b)
   {
      //alert("inside sum funciton");
      return a+b;
   }
   
   sub(a,b)
   {
      return a-b;
   }

   div(a,b)
   {
      return a/b;
   }

   mul(a,b)
   {
      return a*b;
   }


   myFunction(charChoice) {
      //alert("thislkl");
      setTimeout(function(charChoice){ 
         var result;
         //alert("thislkl");
      switch(charChoice)
            {
               case "+":
                  //alert("inside +");
                  result=this.calculate(stackNo[0],stackNo[2],this.sum);
                  break;
               
               case '-':
                  result=this.calculate(stackNo[0],stackNo[2],this.sub);
                  break;
               
               case '/':
                  result=this.calculate(stackNo[0],stackNo[2],this.div);
                  break;
               
               case '*':
                  result=this.calculate(stackNo[0],stackNo[2],this.mul);
                  break;  

            }
         return result;
       }, 3000);
    }
   operationDone(charChoice)
   {
      var result;
      switch(charChoice)
            {
               case "+":
                  //alert("inside +");
                  result=this.calculate(stackNo[0],stackNo[2],this.sum);
                  break;
               
               case '-':
                  result=this.calculate(stackNo[0],stackNo[2],this.sub);
                  break;
               
               case '/':
                  result=this.calculate(stackNo[0],stackNo[2],this.div);
                  break;
               
               case '*':
                  result=this.calculate(stackNo[0],stackNo[2],this.mul);
                  break;  

            }
         return result;



   }

   display(a)
   {
      let val=a.value;
      //alert("cool");
      //alert(val);
      console.log(`firs array a is ${stackNo} and append is ${appendStatus}`);
      if(stackNo.length==0 && (val=='+' || val=='/' || val=='*' || val=='-'))
      {
         alert("inside null");
         console.log( "stack is empty and value is +");
         return;
      }

      else if(val=='X')
      {
         if(stackNo.length==0)
         {
            return;
         }

         else if(stackNo.length==1)
         {
            //alert("inside x");
            console.log("Contents inside stackNO is " + stackNo);
            if(stackNo[0]<=0)
            {
               stackNo.pop();
               labelvalue=0;
            }
            else
            {
               
               stackNo[0]=Math.floor(stackNo[0]/10);
               
               console.log("t the asdlfk "+ stackNo[0]);
               labelvalue=stackNo[0];
            }
         }

         else if(stackNo.length==2)
         {
            stackNo.pop();
            labelvalue=labelvalue.slice(0,-1);
         }

         else
         {
            if(stackNo[2]<=0)
            {
               stackNo.pop();
               labelvalue=0;
            }
            else
            {
               
               stackNo[2]=Math.floor(stackNo[2]/10);
               
               console.log("t the asdlfk "+ stackNo[2]);
               labelvalue=labelvalue.slice(0,-1);
            }
         }
      }
      else if(val=='=')
      {
         //alert("inside match");
         if(stackNo.length==3)
         {
            var choice=stackNo[1];
            //prompt(choice);
            
            stackNo[0]=this.myFunction(choice);
            stackNo.pop();
            stackNo.pop();
            if(val!='=')
            {
               stackNo.push(val);
            }
            console.log(stackNo[0]);
            labelvalue=stackNo[0];
         }
         else
         {
            return;
         }
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

   
      else if(val=='+' || val=='*' || val=='/' || val=='-')
      {
         // if(stackNo[1]=='+')
         // {
         //    stackNo[0]=this.calculate(stackNo[0],stackNo[2],this.sum);
         //    labelvalue=stackNo[0];
         // }
         // else{
         //    stackNo.push('+');
         // }
         if(stackNo.length==1)
         {
            console.log("12 should be followed by + as second element");
            stackNo.push(val);
            appendStatus=false;
            labelvalue+=val;
         }

         
         else if(stackNo.length==3)
         {
            stackNo[0]=this.myFunction(stackNo[1]);
            stackNo[1]=val;
            stackNo.pop();
            labelvalue=stackNo[0]+val;

         }

         else
         {
            return;
         }
      }

      else if(val==='C')
      {
         console.log(stackNo);
         
         if(stackNo.length>0)
         {
            
            for(var i=0;i<stackNo.length;i++)
            {
              
               stackNo.pop();
            }
         }
         tail=0;
         labelvalue=0;
      }
      else
      { 
         console.log(" Append status inside number is "+ appendStatus);
         val=parseInt(val);
         
         
         // console.log("the no is " + val);
         // console.log("The type arr"+typeof(stackNo[stackNo.length-1]));
         if(typeof(stackNo[stackNo.length-1])==='number' && tail!=0)
         {
            //console.log ("Insdie");
            if(appendStatus)
            {
              
               console.log("12 should be inserted");
               let insertEle=stackNo[stackNo.length-1]*10+val;
               console.log(insertEle);
               stackNo[stackNo.length-1]=insertEle;
               console.log(stackNo);
            }

            else 
            {
               //console.log("append status flas")
               
               stackNo.push(val);
               appendStatus=true;
            }
            
            
            labelvalue+=val;
            
         }
         else
         {
            console.log(" 1 should be inserted");
            appendStatus=true;
            stackNo.push(val);
            labelvalue+=val;
            console.log(stackNo[Array.length-1]);
            tail+=1;
         }
      } 
      
      // labelvalue=labelvalue+a.value;
      document.getElementById("resultLabel").innerHTML=labelvalue;
      // console.log("paerjr " +a.value);
      console.log("Array elements is "+ stackNo);
    }
}
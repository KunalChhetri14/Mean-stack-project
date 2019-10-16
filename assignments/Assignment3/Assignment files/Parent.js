labelvalue="";
stackNo=[];
tail=0;
appendStatus=true;
class Parent
{
  
   calculate(a,b,callback)
   {
      return callback(a,b);
   }
   sum(a,b)
   {
      alert("inside sum funciton");
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




   display(a)
   {
      let val=a.value;
      //alert(val);
      console.log(`firs array a is ${stackNo} and append is ${appendStatus}`);
      if(stackNo.length==0 && (val=='+' || val=='/' || val=='*' || val=='-'))
      {
         alert("inside null");
         console.log( "stack is empty and value is +");
         return;
      }
      else if(val=='=')
      {
         if(stackNo.length==3)
         {
            var choice=stackNo[1];
            //prompt(choice);
            var result;
            switch(choice)
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
            stackNo[0]=result;
            stackNo.pop();
            stackNo.pop();
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
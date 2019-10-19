
displayScientific=function(){
    //alert("cojfl");
    document.getElementById('BaseCalc').style="display:none;";
    document.getElementById('ScientificCalc').style="visibility:visible";
    document.getElementById('base').setAttribute("class","btn btn-danger");
    document.getElementById('scientific').setAttribute("class","btn btn-success");
}
// displayScientific=function()
// {
//     alert("cojfl");
//     document.getElementById('BaseCalc').style="display:none;";
//     document.getElementById('ScientificCalc').style="visibility:visible";
// }



scientificObj=null;



CallObjectScientific=function(val)
{
    if(!scientificObj)
    {
        //alert("fisrt time object creations");
        scientificObj=new ScientificCalc();
        scientificObj.display(val);

            //alert("first time object creation");
            //alert("inside calc");
        
    }
    //alert("you are inside call" + val.value);
   

   else
   {
    // alert("second time object creation");
      scientificObj.display(val);
   }
}

class ScientificCalc
{
    operatorStatus=false;
    labelvalue="";
    operandStatus=false;
    CalculatedResult="";
    lastOperandNo=true;
    Exp="false";

    constructor() {
        //super();
        this.operatorStatus=false
        this.labelvalue="";
        this.Exp="";
        this.operandStatus=true;
        this.lastOperandNo=true;
       // alert("kjfdlk");
    }

  


    display(a)
   {
      
      let val=a.value;

      
      //alert(`inside display  ${val}`);
      if(val=='+' || val=='/' || val=='*' || val=='-')
      {
        console.log("Inisde operator");
        //alert("Inside operator selection"+this.operatorStatus);
          if(this.operatorStatus)
          {
            //alert("inside operator satsus");
            this.labelvalue+=val;
            this.Exp+=val;
            this.operatorStatus=false;
            this.operandStatus=true;
          }
        
      }
    
      else if(val=='sin')
      {
        
        //console.log("inside sin");
        this.Exp=this.Exp+"Math.sin((1.000000358/57.2958)*";
        this.labelvalue=this.labelvalue+"sin(";
      }

      else if(val=='cos')
      {
        this.Exp=this.Exp+"Math.cos((1.000000358/57.2958)*";
        this.labelvalue=this.labelvalue+"cos(";
      }

      else if(val=='tan')
      {
        this.Exp=this.Exp+"Math.tan((1.000000358/57.2958)*";
        this.labelvalue=this.labelvalue+"tan(";
      }

      else if(val=='log')
      {
        this.Exp=this.Exp+"Math.log(";
        this.labelvalue=this.labelvalue+"log(";
      }

      else if(val=='X')
      { 
          console.log("inside X");
        
         if(this.labelvalue.length==0)
         {
            return;
         }

         else 
         {
            //alert("inside x");
            if(this.labelvalue==this.CalculatedResult)
            {
                alert("here it is same");
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
                this.Exp=this.labelvalue.slice(0,-1);
            }
        }
      }

      else if(val=='=')
      {
          console.log("Inside =");
        let lastCharacter=this.labelvalue.substring(this.labelvalue.length-1,this.labelvalue.length);
        if(lastCharacter=='+' || lastCharacter=='-' || lastCharacter=='*' || lastCharacter=='/')
        {
            this.labelvalue=this.labelvalue.substring(0,this.labelvalue.length-1);
            this.Exp=this.Exp.substring(0,this.Exp.length-1);
        }
        try
        {
            let result=eval(this.Exp);
            this.Exp=result;
            this.labelvalue=result;
            this.CalculatedResult=this.labelvalue;
            this.operatorStatus=true;
            this.operandStatus=false;
        }
        catch(err)
        {
            alert("Please enter the expression in correct format");
        }
        
        
       


      }
     
      else if(val==='C')
      {
         console.log("inside C");
         this.labelvalue="";
         this.Exp="";
         this.operandStatus=true;
         this.operatorStatus=false;
      }
      else if(val=='(')
      {
          this.labelvalue+='(';
          this.Exp+='(';
      }
      else if(val==')')
      {
          this.labelvalue+=')';
          this.Exp+=')';
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
            this.labelvalue=this.labelvalue+val; // can't concat after carrying = operation if false
            this.Exp=this.Exp+val;
        }
        
        console.log(`Afer concat ${this.labelvalue}`);
        this.operatorStatus=true;
      
      } 
      console.log(`the val is ${val}`);
      // labelvalue=labelvalue+a.value;
      document.getElementById("resultLabelScientific").innerHTML=this.labelvalue;
      // console.log("paerjr " +a.value);
      console.log("Array elements is "+ this.labelvalue);
      console.log(`Expression elements are ${this.Exp}`);
    }

    
}
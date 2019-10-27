
 function setValues(ele)
 {
     console.log("inside ");
     let labVal=document.getElementById("labelField").value;
     console.log("kay");
     console.log(labVal);
     if(ele=='C')
     {
         labVal="";
     }
     
    //  if(ele='X')
    //  {
    //      labVal=labVal.slice(0,-1);
     
     
    //  }

     else
     {
         labVal+=ele; 
     }
     //document.getElementById('labelField').value=labVal;
     document.getElementById("labelField").value=labVal;
 }
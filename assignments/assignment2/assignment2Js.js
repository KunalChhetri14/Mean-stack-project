ob={};
function submitbutton()
{
    
    ob['name']=document.getElementById('name').value;
    ob['email']=document.getElementById('email').value;
    ob['place']=document.getElementById('place').value;
    ob['mobNo']=document.getElementById('mobNo').value;
    //alert("Name is "+ ob['name'])+ " email "+ob['email']+ " place is " + ob['place']+ " Mobile NO"+ob[mobNo];
    console.log("inside submit");
    console.log(ob);
    //console.log("the "+pname);  not working
}



function disable()
{
  document.getElementById('name').style.display="none";  
  document.getElementById('idDisable').style.backgroundColor="green";
  
   //alert("set");
}
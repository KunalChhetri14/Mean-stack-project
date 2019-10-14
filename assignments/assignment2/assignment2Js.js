var i=0;

function EnableOrDisable() {
  var status=document.getElementById("EnDis").value;
  if(status=="DISABLE")
  {
    // alert("this ");
      document.getElementById("name").readOnly=true;
      document.getElementById("email").readOnly=true;
      document.getElementById("place").readOnly=true;
      document.getElementById("mobNo").readOnly=true;
      //document.getElementsByClassName("read").readOnly=true;
      document.getElementById("EnDis").value="ENABLE";
      document.getElementById("EnDis").setAttribute("class","btn btn-success");
  }
  else{
    //document.getElementsByClassName("read").readOnly=false;

    document.getElementById("name").readOnly=false;
    document.getElementById("email").readOnly=false;
    document.getElementById("place").readOnly=false;
    document.getElementById("mobNo").readOnly=false;
    document.getElementById("EnDis").value="DISABLE";
    document.getElementById("EnDis").setAttribute("class","btn btn-danger");
  }

}


function submitting()
{
  obj={};
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var mobNo=document.getElementById("mobNo").value;
  var place=document.getElementById("place").value;
  obj['name']=name;
  obj['email']=email;
  obj['mobNo']=mobNo;
  obj['place']=place;
  console.log(obj);
}




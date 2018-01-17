function checkAndCalc(){
var a=document.SampleForm.n.value;
if(isNaN(a)==0)
{
  var b; var c;
  b=a*a;
  c=a*a*a;
   document.getElementById("s1").innerHTML=b;
   document.getElementById("c1").innerHTML=c;
   }
else
  document.getElementById("p1").innerHTML="Enter a valid number!";
}

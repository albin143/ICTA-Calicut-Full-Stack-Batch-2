  
function operation()
{
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
    var op=document.getElementById("Operation").value;
    var z=0;
    if(op=="Addition")
    {
        z=x+y;
    }
    else if(op=="Subtraction")
    {
        z=x-y;
    }
console.log(z);
document.getElementById("result").innerHTML="<b>"+z+"</b>";
// alert(z);


}
function med(){

var med1=document.getElementById("m1").value;
var med2=document.getElementById("m2").value;
var med3=document.getElementById("m3").value;
v=9;

document.getElementById("medone").innerHTML=med1;
document.getElementById("medtwo").innerHTML=med2;
document.getElementById("medt").innerHTML=med3;

}
function pay(){

var g1=Number(document.getElementById("medi").value);
var g2=Number(document.getElementById("medii").value);
var g3=Number(document.getElementById("mediii").value);

var pay=g1*12+g2*14+g3*5;
    if(pay!=0 && pay<1000){
        pay=pay+864;
}   
document.getElementById("billpay").innerHTML=pay;

}

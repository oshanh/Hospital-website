

function fun(){

    
var data=document.getElementsByName("sleep");
var data2=document.getElementsByName("intredient");
var data3=document.getElementsByName("thirsty");
var data4=document.getElementsByName("believe");
var data5=document.getElementsByName("alchol");
var data6=document.getElementsByName("thirsty1");
var data7=document.getElementsByName("thirsty2");

//How much sleep do you get  :
for (var i=0;i<3;i++){
    if(data[i].checked){
        score=Number(data[i].value);
        if (score)
            break;

    }
}

//Do you read intredient on everyting you consure  :
for (var i=0;i<3;i++){
    if(data2[i].checked){
        var score=score+Number(data2[i].value);
        if (score)
            break;

    }
}


//Youre thirsty, You choose  :
for (var i=0;i<3;i++){
    if(data3[i].checked){
        var score=score+Number(data3[i].value);
        if (score)
            break;

    }
}


//Do you believe in the phrase you are what you eat  :
for (var i=0;i<3;i++){
    if(data4[i].checked){
        var score=score+Number(data4[i].value);
        if (score)
            break;

    }
}


//Do you consume alchol  :
for (var i=0;i<3;i++){
    if(data5[i].checked){
        var score=score+Number(data5[i].value);
        if (score)
            break;

    }
}


//Do you smoke  :
for (var i=0;i<3;i++){
    if(data6[i].checked){
        var score=score+Number(data6[i].value);
        if (score)
            break;

    }
}

//What was the last time you ate fast food  :
for (var i=0;i<3;i++){
    if(data7[i].checked){
        var score=score+Number(data7[i].value);
        if (score)
            break;

    }
}




alert("Your score="+score);
    if (score==21){
        document.getElementById('hlthy').style.display="";
        //count+=1;
    }
    else if (score==24){
        document.getElementById('hlthy').style.display="";
        //count+=1;
    }
    else if (score==26){
        document.getElementById('hlthy').style.display="";
        //count+=1;
    }
    else if (score==27){
        document.getElementById('hlthy').style.display="";
        //count+=1;
    }
    else if (score==28){
        document.getElementById('hlthy').style.display="";
    }
    else if (score==26){
        document.getElementById('hlthy').style.display="";
    }
    else if (score==42){
        document.getElementById('unhlthy').style.display="";
    }
    else  (score==56)
        document.getElementById('unhlthy').style.display="";

}



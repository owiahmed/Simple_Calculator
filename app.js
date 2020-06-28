function getNumber(num){
    var answer= document.getElementById("answer");
    answer.value +=num;
}

function clearAnswer(){
    var answer=document.getElementById("answer");
    answer.value=""
}

function getResult(){
    var answer=document.getElementById("answer");
    answer.value= eval(answer.value)
}

function back(){
    var answer=document.getElementById("answer");
    answer.value=answer.value.slice(0,-1)
}
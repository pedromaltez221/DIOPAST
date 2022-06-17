const CURRENT_NUMBER = document.getElementById('currentNumber');
let count = 0;

function increment(){
    count++;
    CURRENT_NUMBER.innerHTML = count;
    setColor();
}

function decrement(){
    count--;
    CURRENT_NUMBER.innerHTML = count;
    if(count < -10){
        document.getElementById('teste').disabled = true
    }
   setColor();
}

function setColor(){

    if(CURRENT_NUMBER.innerHTML < 0){
        CURRENT_NUMBER.style.color = 'red';
    }
    else{
        CURRENT_NUMBER.style.color = 'black';
    }
}
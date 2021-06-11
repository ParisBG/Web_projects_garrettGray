
function getX(){
    return x = parseFloat(document.getElementById("xField").value);
}

function getY(){
    return y = parseFloat(document.getElementById("yField").value);
}

function whoAmI(){
    alert("LoL, Wow Bro...");
    return false;
}


function myCalc(action){
    switch(action){
        case 0: resultField.value = (getX() + getY());
            return false;
        case 1: resultField.value = (getX() - getY());
            return false;
        case 2: resultField.value = (getX() * getY());
            return false;
        case 3: resultField.value = (getX() / getY());
            return false;
        case 4: location.reload();
        break;
    }

}
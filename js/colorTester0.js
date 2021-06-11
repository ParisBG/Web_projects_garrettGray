function renderCircle(){
    var radio1 = document.getElementById("radio1").checked;
    var radio2 = document.getElementById("radio2").checked;
    var radio3 = document.getElementById("radio3").checked;

    if (radio1){
        var myR = document.getElementById("inputRed").value;
        var myG = document.getElementById("inputGreen").value;
        var myB = document.getElementById("inputBlue").value;

        //send rgb values to draw
        createCircleRGB(0,myR,myG,myB);

    } else if (radio2){
        var hexa = document.getElementById("inputHexa").value;

        //send hexa value
        createCircle(1,hexa);

    } else if (radio3){
        var colorName = document.getElementById("inputColorName").value;

        //send color name value
        createCircle(2,colorName);

    } else {
        alert("NO VALUES SELECTED!!");
    }

}

function createCircle(rowNum,color){
    var canvas = document.getElementById('circle' + (rowNum + 1));
    var myCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    
    myCircle.setAttribute("cx","50");
    myCircle.setAttribute("cy","50");
    myCircle.setAttribute("r","40");
    myCircle.setAttribute("fill",color);
    myCircle.setAttribute("stroke","white");
    myCircle.setAttribute("stroke-width","4");

    canvas.appendChild(myCircle);
                     //<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />

}

function createCircleRGB(rowNum,myR,myG,myB){
    var canvas = document.getElementById('circle' + (rowNum + 1));
    var myCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    
    myCircle.setAttribute("cx","50");
    myCircle.setAttribute("cy","50");
    myCircle.setAttribute("r","40");
    myCircle.setAttribute("fill",'rgb(' + myR + ',' + myG + ',' + myB + ')');
    ;
    myCircle.setAttribute("stroke","white");
    myCircle.setAttribute("stroke-width","4");

    canvas.appendChild(myCircle);
                     //<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />

}
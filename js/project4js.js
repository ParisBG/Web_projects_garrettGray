window.onload = function(){
    var boxRow1 = "inputRedQ";
    var boxRow2 = "inputGreenQ";
    var boxRow3 = "inputBlueQ";

    for (var z = 1; z < 5; z++){
        createListeners(boxRow1 + z);
        createListeners(boxRow2 + z);
        createListeners(boxRow3 + z);
    }
}


function createListeners(myElementId){
    var element = document.getElementById(myElementId);
    element.addEventListener("input", inputEventHandler, false);

    function inputEventHandler(event){
       if (element.value > 256 || element.value <= 0){
        alert("Must Enter a value between 0 and 256!");
       }
    }
}

function resetNode(node){
    while(node.firstChild){node.removeChild(node.firstChild);}
}

function createAxis(node){
    //draw y axis
    var xPolyline = document.createElementNS("http://www.w3.org/2000/svg","polyline");
    xPolyline.setAttribute("points","100,50 100,350");
    xPolyline.setAttribute("style","stroke: black; stroke-width:2");

    node.appendChild(xPolyline);
    
    //draw x axis
    var yPolyline = document.createElementNS("http://www.w3.org/2000/svg","polyline");
    yPolyline.setAttribute("points","100,350 700,350");
    yPolyline.setAttribute("style","stroke: black; stroke-width:2");

    node.appendChild(yPolyline);
}

    function setBars(colorNum, whichQuarter, pos, svgElement){
        var colorValueId;
        var colorName;

        switch (colorNum){
            case 0: 
            colorValueId = "inputRedQ";
            colorName = "red";

            break;
    
            case 1: 
            colorValueId = "inputGreenQ";
            colorName = "green";

            break;
    
            case 2: 
            colorValueId = "inputBlueQ";
            colorName = "blue";

            break;
    
        }

        var data = document.getElementById(colorValueId + whichQuarter).value;

        var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        rect.setAttribute("x",pos);
        rect.setAttribute("y",(svgElement.clientHeight - data - 52));
        rect.setAttribute("width","150");

        rect.setAttribute("height",data);
        rect.setAttribute("fill",colorName);

        svgElement.appendChild(rect);

    }

  function setPie(colorNum, whichQuarter, pos, svgElement){
    var colorValueId;
    var colorName;

    switch (colorNum){
        case 0: 
        colorValueId = "inputRedQ";
        colorName = "red";
        break;

        case 1: 
        colorValueId = "inputGreenQ";
        colorName = "green";
        break;

        case 2: 
        colorValueId = "inputBlueQ";
        colorName = "blue";
        break;

    }

    var data = document.getElementById(colorValueId + whichQuarter).value;

    var circ = document.createElementNS("http://www.w3.org/2000/svg","circle");
    circ.setAttribute("cx",pos);
    circ.setAttribute("cy",(svgElement.clientHeight - data - 52));
    circ.setAttribute("width","100");
    circ.setAttribute("r","16");

    circ.setAttribute("stroke-width","32");
    circ.setAttribute("transform","100");

    circ.setAttribute("height",data);
    circ.setAttribute("fill",colorName);

    svgElement.appendChild(circ);

  }

    function placeTitles(whichQuarter){
        switch (whichQuarter){
            case 1: 
                createChartTitles("Quarter 1","lineChartDiv");
            break;
    
            case 2: 
                createChartTitles("Quarter 2","barUpChartDiv");
            break;
    
            case 3: 
                createChartTitles("Quarter 3","barRightChartDiv");
            break;
    
            case 4: 
                createChartTitles("Quarter 4","pieChartDiv");    
            break;

            
    }
}

 function beginGraph(svgId, whichQuarter){
    var svgElement = document.getElementById(svgId);
    resetNode(svgElement);
    createAxis(svgElement);
    drawBorder();

    var colorNum = 0;

    placeTitles(whichQuarter);

  

    
    for (let pos = 125; pos < (svgElement.clientWidth - 200); pos += 200){
        
        setBars(colorNum, whichQuarter, pos, svgElement);
        colorNum++;

        
    }
}


    function rgbRandoNum(){
        return Math.floor(Math.random() * 256);
    }

    function autoFill(){

        for (var i = 1; i < 5; i++){
            document.getElementById("inputRedQ" + i).value = rgbRandoNum();
            document.getElementById("inputGreenQ" + i).value = rgbRandoNum();
            document.getElementById("inputBlueQ" + i).value = rgbRandoNum();
        }
    }

    function createCharts(){

        if (!checkIfAllEmpty()){
            createChartTitles("RGB RESULTS","chartLabel");    
            
            beginGraph("svgCanvasLine",1);

            //MAKE DIF TYPES OF GRAPHS
            beginGraph("svgCanvasBarUp",2);
            beginGraph("svgCanvasBarRight",3);
            beginGraph("svgCanvasPie",4);
        }
    }

    function drawBorder(){
        var svg = document.getElementsByTagName("svg")[0];
    
        svg.style["background-color"] = "white"; 
        svg.style["border-color"] = "light grey"; 
        svg.style["border"] = "1px"; 
    
    }

    function checkIfAllEmpty(){
        var calc = 0;
        for (var x = 1; x < 5; x++){
            calc += document.getElementById("inputRedQ"+x).value;
            calc += document.getElementById("inputGreenQ"+x).value;
            calc += document.getElementById("inputBlueQ"+x).value;

        }

        if (calc == 0){
            alert("Please Enter Values for all colors, then click submit!");
            return true;
        } else {
            return false;
        }
    }

    function createChartTitles(chartTitle,whichDiv){
       
        var checkTitle = document.getElementById("h2" + chartTitle);
        if (checkTitle == null || checkTitle == undefined){
            var title = document.createElement("h2");
        } else {
            var title = checkTitle;
        }

        var titleSize = "display-5";

        if (chartTitle == "RGB RESULTS"){
            titleSize = "display-3";
        }

        title.setAttribute("class", titleSize);
        title.setAttribute("id", "h2"+ chartTitle);

        title.style.fontWeight = "bold";
        title.innerHTML = chartTitle;

        //var node = document.createTextNode(chartTitle);
        //title.appendChild(node);

        var element = document.getElementById(whichDiv);
        element.appendChild(title);
    }
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

//When browser COMPLETELY loads, browser will run function immediately
window.onload = bar = function (){
    var svgElement = document.getElementById("svgCanvas");
    resetNode(svgElement);
    createAxis(svgElement);

    var colors = ["tomato","lightblue","orange","purple","grey","darkkhaki"];
    var colorIndex = 0;

    for (let pos = 100; pos < (svgElement.clientWidth - 100); pos += 100){
        //dynamically created data
        var data = Math.floor((Math.random() * (svgElement.clientHeight - 100)));

        //create a bar
        var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        rect.setAttribute("x",pos);
        rect.setAttribute("y",(svgElement.clientHeight - data - 52));
        rect.setAttribute("width","80");
        rect.setAttribute("height",data);
        rect.setAttribute("fill",colors[colorIndex++]);

        svgElement.appendChild(rect);

    }

}
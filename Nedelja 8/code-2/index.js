function $(selector) {
    return document.querySelector(selector);
}

function loadDoc(url, cFunction) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function myFunction1(xhttp) {
    console.log(xhttp);
    $("#demo").innerHTML =
        xhttp.responseText;
}

function myFunction2(xhttp) {
    let xmlDoc = xhttp.responseXML;
    console.log(xmlDoc)
    let txt = "";
    let x = xmlDoc.getElementsByTagName("ARTIST");
    for (let i = 0; i < x.length; i++) {
        txt = txt + x[i].textContent + "<br>";
    }
    console.log(xhttp.getResponseHeader("last-modified"));
    $("#demo").innerHTML = txt;
}

function createTable (xhttp) {

    let xmlDoc = xhttp.responseXML;
    let table = "<table><tr><th>Artist</th><th>Title</th></tr>";
    let x = xmlDoc.getElementsByTagName("CD");
    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("ARTIST")[0].textContent +
            "</td><td>" +
            x[i].getElementsByTagName("TITLE")[0].textContent +
            "</td></tr>";
    }
    $("#demo").innerHTML = table + "</table>";
}

$("#htmlContent").addEventListener("click", function () {
    loadDoc("ajax_info.txt", myFunction1);
})

$("#xmlContent").addEventListener("click", function () {
    loadDoc("cd_catalog.xml", myFunction2);
})

$("#xmlTable").addEventListener("click", function () {
    loadDoc("cd_catalog.xml", createTable);
})

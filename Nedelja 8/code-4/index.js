function myFunction() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const myObj = JSON.parse(this.responseText);
            document.getElementById("demo").innerHTML = JSON.stringify(myObj.pets[2]);
        }
    };
    xmlhttp.open("GET", "json_demo.json", true);
    xmlhttp.send();
}

myFunction();
var myimgs = document.images;
var myimgs2 = document.getElementsByTagName("img");

var cities = document.getElementsByClassName("bPink").options;

var table2 = document.getElementsByTagName("table")[1]
var tablerows = table2.getElementsByTagName("tr");

var blueeles = document.querySelectorAll(".fontBlue");

console.log("============================================");

var anchore1 = table2.getElementsByTagName("a")[0];
anchore1.href = "https://training.com";
anchore1.textContent = "Training";

var lastimg = myimgs2[myimgs2.length - 1];
lastimg.style.border = "2px solid pink";


function checkboxesalert() {
    var form = document.forms["userData"];
    var checkboxes = form.querySelectorAll("input[type='checkbox']:checked");

    checkboxes.forEach(function(checkbox) {
        alert(checkbox.value);
    });
}


var exelement = document.getElementById("example");
exelement.style.backgroundColor = "pink";

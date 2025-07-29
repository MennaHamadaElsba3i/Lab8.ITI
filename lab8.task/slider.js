var images = ["./imgs/1.png", "./imgs/2.png", "./imgs/3.png"];
var myindex = 0;
var ifvalid = null;

function showimg(index) {
     var img = document.getElementById("slideshow");
     img.src = images[index];
}

function nextimage() {
     myindex = (myindex + 1) % images.length;
     showimg(myindex);
}

function preimg() {
     myindex = (myindex - 1 + images.length) % images.length;
     showimg(myindex);
}

function startslider() {
     if (!ifvalid) {
          ifvalid = setInterval(nextimage, 1000); 
     }
}

function stopslider() {
     clearInterval(ifvalid);
     ifvalid = null;
}

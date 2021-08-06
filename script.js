/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("menu");
//     if (x.className === "max-width") {
//       x.className += " responsive";
//     } else {
//       x.className = "max-width";
//     }
//   }


var navbarEle = document.getElementById("nabvar-id");

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbarEle.style.backgroundColor = "#000";
    }
    else {
        navbarEle.style.backgroundColor = "transparent";
    }
}
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

readContent = document.getElementById("read");
readContentToggler = document.getElementById("readmorelesetoggler");

readContentToggler.addEventListener("click",function () {
    readContent.classList.toggle("reading");
    if (readContent.classList.contains("reading")) {
        readContentToggler.innerHTML = "Read Less";
    }
    else {
        readContentToggler.innerHTML = "Read More";
    }
})




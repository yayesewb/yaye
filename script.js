


var navbarEle = document.getElementById("nabvar-id");

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbarEle.style.backgroundColor = "#000";
    }
    else {
        navbarEle.style.backgroundColor = "transparent";
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




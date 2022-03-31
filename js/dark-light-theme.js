const icon = document.querySelector("#icon")

if(localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if (localData === "light") {
    icon.src = "images/moon.png";
    document.body.classList.remove("dark-mode")
}
else if(localData === "dark") {
    icon.src = "images/sun.png";
    document.body.classList.add("dark-mode")
}

icon.addEventListener("click", changeMode);

function changeMode() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")) {
        icon.src = "images/sun.png";
        localStorage.setItem("theme", "dark");
    }
    else {
        icon.src= "images/moon.png";
        localStorage.setItem("theme", "light");
    }
}
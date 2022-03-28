const navSlider = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("ul")
    const links = document.querySelectorAll("ul li");    

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        links.forEach((link, index) => {
            if(link.style.animation) {
             link.style.animation = "";
            }
            else {
                link.style.animation = `linksFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
         });

         burger.classList.toggle("toggle");

    });
}

navSlider();
function setTheme(){
    const root = document.documentElement;
    const newTheme = root.className === "light"? "dark" : "light";
    root.className = newTheme;
    if (root.className === "dark"){
        darkModeIcon.src = "images/light-mode-icon.svg";
        darkModeIcon.alt = "Dark Mode Icon";
    }
    else {
        darkModeIcon.src = "images/dark-mode-icon.svg";
        darkModeIcon.alt = "Light Mode Icon";
    }
}


document.documentElement.className = 'light';
darkModeIcon = document.querySelector(".dark-mode-icon");
darkModeIcon.addEventListener("click", setTheme)

const projectBoxes = document.querySelectorAll(".project-box.graphic");
projectBoxes.forEach((box)=>{
    const video = box.querySelector("video");
    
    box.addEventListener("mouseenter", () => {
        video.currentTime = 0;
        video.style.opacity = 1;
        video.play();
    })

    box.addEventListener("mouseleave", () => {
        video.pause();
        video.style.opacity = 0;
    })
})



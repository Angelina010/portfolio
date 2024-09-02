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
    
    const playVideo = () => {
        video.currentTime = 0;
        video.style.opacity = 1;
        video.play();
    };

    const pauseVideo = () => {
        video.pause();
        video.style.opacity = 0;
    };

    // Add mouseenter event for non-touch devices
    box.addEventListener("mouseenter", playVideo);
    box.addEventListener("mouseleave", pauseVideo);

    // Add click event for touch devices
    box.addEventListener("click", () => {
        if (video.paused) {
            playVideo();
        } else {
            pauseVideo();
        }
    });
})



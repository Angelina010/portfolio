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
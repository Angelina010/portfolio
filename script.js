videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("click", ()=>{
        video.play();
    })
    
});
const plusIcons = document.querySelectorAll(".clickplus");

plusIcons.forEach(plus => {
    plus.addEventListener("click", () => {
        const answer = plus.parentElement.nextElementSibling;
        answer.classList.toggle('active');
    });
});


const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        console.log("Mouse entered on poster");

        const video = thumbnail.nextElementSibling; // Select corresponding iframe
        video.classList.add('active'); // Show video
        thumbnail.classList.add('afterclickthumbnail'); // Hide poster
    });
});

// VIDEO BACK TO POSTER (Mouse Leave)
const iframes = document.querySelectorAll("iframe");

iframes.forEach(iframe => {
    iframe.addEventListener("mouseleave", () => {
        console.log("Mouse left iframe");

        const thumbnail = iframe.previousElementSibling; // Select corresponding poster
        iframe.classList.remove('active'); // Hide video
        thumbnail.classList.remove('afterclickthumbnail'); // Show poster
        const videoSrc = iframe.src; 
        console.log(videoSrc);
        
        iframe.src = ""; // Clear the source to stop video
        iframe.src = videoSrc;
    });
});
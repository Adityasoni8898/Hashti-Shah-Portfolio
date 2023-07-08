const cursorDot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", function(e){

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.animate({
        left:`${posX}px`,
        top:`${posY}px`,
    }, {
        duration:200, fill:"forwards"
    })

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

})
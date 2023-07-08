const custom_slider = document.querySelector('.about_us_services');
let isDown = false;
let startX;
let scrollLeft;
console.log("ad");

custom_slider.addEventListener('mousedown', (e) => {
    isDown = true
    custom_slider.classList.add('active');
    scrollLeft = custom_slider.scrollLeft;
    startX = e.pageX - custom_slider.offsetLeft;
});

custom_slider.addEventListener('mouseleave', () => {
    isDown = false;
    custom_slider.classList.remove('active');
});
    
custom_slider.addEventListener('mouseup', () => {
    isDown = false;
    custom_slider.classList.remove('active');
});

custom_slider.addEventListener('mousemove', (e) => {
    if(!isDown){
        return;
    }

    e.preventDefault();
    const x = e.pageX - custom_slider.offsetLeft;
    const walk = (x - startX)*1.5;
    custom_slider.scrollLeft = scrollLeft - walk;
});
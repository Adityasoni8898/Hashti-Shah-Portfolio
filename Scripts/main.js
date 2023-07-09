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



const custom_slider_j = document.querySelector('.journey_elements_container');
let isDown_j = false;
let startX_j;
let scrollLeft_j;
console.log("ad");

custom_slider_j.addEventListener('mousedown', (e) => {
    isDown_j = true
    custom_slider_j.classList.add('active');
    scrollLeft_j = custom_slider_j.scrollLeft;
    startX_j = e.pageX - custom_slider_j.offsetLeft;
});

custom_slider_j.addEventListener('mouseleave', () => {
    isDown_j = false;
    custom_slider_j.classList.remove('active');
});
    
custom_slider_j.addEventListener('mouseup', () => {
    isDown_j = false;
    custom_slider_j.classList.remove('active');
});

custom_slider_j.addEventListener('mousemove', (e) => {
    if(!isDown_j){
        return;
    }

    e.preventDefault();
    const x_j = e.pageX - custom_slider_j.offsetLeft;
    console.log(x_j)
    const walk_j = (x_j - startX_j)*1.5;
    custom_slider_j.scrollLeft = scrollLeft_j - walk_j;
});
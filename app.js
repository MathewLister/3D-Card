//Movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const skateboard = document.querySelector(".skateboard img");

//Moving animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //pop out
    skateboard.style.transform = "translateY(50px) translateZ(200px) rotateZ(-45deg)";
})

//Animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //push in
    skateboard.style.transform = "translateZ(0px) rotateZ(0deg)";
});
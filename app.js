// Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const title = document.querySelector(".title");
const agent = document.querySelector(".agent img");
const link = document.querySelector(".link button");
const description = document.querySelector(".info h3");
const abilities = document.querySelector(".abilities");


// Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateY(${yAxis}deg)`;
})

// Animate In
container.addEventListener("mouseenter", e => {
    card.style.transition = "none";
    //Popout effect
    title.style.transform = "translateZ(150px)";
    agent.style.transform = "translateZ(150px)";
    link.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(150px)";
    abilities.style.transform = "translateZ(150px)";
});

// Animate Out
container.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateY(0deg)`;
    //Popout effect
    title.style.transform = "translateZ(0px)";
});

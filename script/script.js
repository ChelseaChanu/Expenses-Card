const monday = document.querySelector(".mon");
const tuesday = document.querySelector(".tue");
const wednesday = document.querySelector(".wed");
const thursday = document.querySelector(".thu");
const friday = document.querySelector(".fri");
const saturday = document.querySelector(".sat");
const sunday = document.querySelector(".sun");
const monPrice = document.getElementById("mon-price");
const tuePrice = document.getElementById("tue-price");
const wedPrice = document.getElementById("wed-price");
const thuPrice = document.getElementById("thu-price");
const friPrice = document.getElementById("fri-price");
const satPrice = document.getElementById("sat-price");
const sunPrice = document.getElementById("sun-price");

function mouseHover(element){
    element.style.display = "block";
}

function mouseOut(element){
    element.style.display = "none";
}

monday.addEventListener("mouseover",()=>{
    mouseHover(monPrice);
});

tuesday.addEventListener("mouseover",()=>{
    mouseHover(tuePrice);
});

wednesday.addEventListener("mouseover",()=>{
    mouseHover(wedPrice);
});

thursday.addEventListener("mouseover",()=>{
    mouseHover(thuPrice);
});

friday.addEventListener("mouseover",()=>{
    mouseHover(friPrice);
});

saturday.addEventListener("mouseover",()=>{
    mouseHover(satPrice);
});

sunday.addEventListener("mouseover",()=>{
    mouseHover(sunPrice);
});

monday.addEventListener("mouseout",()=>{
    mouseOut(monPrice);
});

tuesday.addEventListener("mouseout",()=>{
    mouseOut(tuePrice);
});

wednesday.addEventListener("mouseout",()=>{
    mouseOut(wedPrice);
});

thursday.addEventListener("mouseout",()=>{
    mouseOut(thuPrice);
});

friday.addEventListener("mouseout",()=>{
    mouseOut(friPrice);
});

saturday.addEventListener("mouseout",()=>{
    mouseOut(satPrice);
});

sunday.addEventListener("mouseout",()=>{
    mouseOut(sunPrice);
});
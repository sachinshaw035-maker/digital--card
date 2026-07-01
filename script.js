// =============================================
// ROYAL WEDDING INVITATION
// SCRIPT.JS - PART 3A
// =============================================


// ==============================
// LIVE COUNTDOWN
// ==============================

const weddingDate = new Date("December 25, 2026 20:00:00").getTime();

const timer = setInterval(function () {

const now = new Date().getTime();

const distance = weddingDate - now;


// Time Calculation

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(distance % (1000 * 60))
/
1000
);


// Display

document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;


// Countdown Finish

if(distance < 0){

clearInterval(timer);

document.getElementById("timer").innerHTML =

"<h2>🎉 Wedding Ceremony Started 🎉</h2>";

}

},1000);



// ==============================
// SCROLL TO TOP BUTTON
// ==============================

let topButton = document.getElementById("topBtn");

window.onscroll = function(){

scrollFunction();

};


function scrollFunction(){

if(

document.body.scrollTop > 300 ||

document.documentElement.scrollTop > 300

){

topButton.style.display="block";

}

else{

topButton.style.display="none";

}

}


topButton.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};




// ==============================
// SAVE THE DATE BUTTON
// ==============================

const saveBtn=document.querySelector("#home button");

saveBtn.addEventListener("click",function(){

alert(

"💍 Thank You!\n\nPlease Save The Date\n25 December 2026 ❤️"

);

});




// ==============================
// GET DIRECTION BUTTON
// ==============================

const venueBtn=document.querySelector(".venue-box button");

venueBtn.addEventListener("click",function(){

alert(

"Google Map Link will be added here."

);

});




// ==============================
// PAGE LOADED
// ==============================

window.onload=function(){

console.log(

"Royal Wedding Invitation Loaded Successfully ❤️"

);

};
// =========================================
// PART 3B
// =========================================



// =========================================
// BACKGROUND MUSIC
// =========================================

// HTML me add karna hoga:
//
// <audio id="bgMusic" loop>
// <source src="music/wedding.mp3" type="audio/mpeg">
// </audio>
//
// <button id="musicBtn">🎵 Music</button>



const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

if(music && musicBtn){

musicBtn.addEventListener("click",function(){

if(music.paused){

music.play();

musicBtn.innerHTML="🔊 Music ON";

}

else{

music.pause();

musicBtn.innerHTML="🎵 Music OFF";

}

});

}



// =========================================
// RSVP VALIDATION
// =========================================

const form=document.querySelector("#rsvp form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name=form.querySelector("input[type=text]").value;

let phone=form.querySelector("input[type=number]").value;

let email=form.querySelector("input[type=email]").value;

if(name=="" || phone=="" || email==""){

alert("Please Fill All Details");

return;

}

alert(

"Thank You "+name+

"\n\nYour RSVP has been received ❤️"

);

form.reset();

});

}



// =========================================
// SCROLL REVEAL
// =========================================

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",reveal);

function reveal(){

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

const screen=window.innerHeight;

if(top<screen-150){

section.style.opacity="1";

section.style.transform="translateY(0px)";

}

});

}

reveal();



// =========================================
// FLOATING HEARTS
// =========================================

function createHeart(){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.zIndex="9999";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

let move=setInterval(function(){

heart.style.top=(heart.offsetTop-3)+"px";

if(heart.offsetTop<0){

clearInterval(move);

heart.remove();

}

},20);

}

setInterval(createHeart,2000);



// =========================================
// PAGE MESSAGE
// =========================================

console.log("Part 3B Loaded Successfully");
// ==============================================
// PART 3C
// PREMIUM EFFECTS
// ==============================================



// ==============================================
// LOADING SCREEN
// ==============================================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

}

});




// ==============================================
// GALLERY IMAGE ZOOM
// ==============================================

const galleryImages=document.querySelectorAll("#gallery img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});




// ==============================================
// GOOGLE MAP BUTTON
// ==============================================

const mapButton=document.querySelector(".venue-box button");

if(mapButton){

mapButton.addEventListener("click",()=>{

window.open(

"https://maps.google.com",

"_blank"

);

});

}




// ==============================================
// CONFETTI EFFECT
// ==============================================

function createConfetti(){

let confetti=document.createElement("div");

confetti.innerHTML="🎊";

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.fontSize=(15+Math.random()*20)+"px";

confetti.style.pointerEvents="none";

confetti.style.zIndex="9999";

document.body.appendChild(confetti);

let speed=2+Math.random()*4;

let rotate=Math.random()*360;

let animation=setInterval(()=>{

confetti.style.top=(confetti.offsetTop+speed)+"px";

rotate+=5;

confetti.style.transform="rotate("+rotate+"deg)";

if(confetti.offsetTop>window.innerHeight){

clearInterval(animation);

confetti.remove();

}

},20);

}

setInterval(createConfetti,500);




// ==============================================
// FLOWER ANIMATION
// ==============================================

function flowerRain(){

let flower=document.createElement("div");

flower.innerHTML="🌸";

flower.style.position="fixed";

flower.style.left=Math.random()*100+"vw";

flower.style.top="-50px";

flower.style.fontSize=(20+Math.random()*25)+"px";

flower.style.pointerEvents="none";

flower.style.zIndex="9999";

document.body.appendChild(flower);

let speed=2+Math.random()*3;

let rotate=0;

let move=setInterval(()=>{

flower.style.top=(flower.offsetTop+speed)+"px";

rotate+=2;

flower.style.transform="rotate("+rotate+"deg)";

if(flower.offsetTop>window.innerHeight){

clearInterval(move);

flower.remove();

}

},20);

}

setInterval(flowerRain,900);




// ==============================================
// FIREWORK MESSAGE
// ==============================================

setTimeout(()=>{

alert(

"💖 Welcome To Our Royal Wedding Invitation 💖"

);

},1500);




// ==============================================
// NAVBAR ACTIVE LINK
// ==============================================

const navLinks=document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>{

item.classList.remove("active");

});

link.classList.add("active");

});

});




// ==============================================
// RANDOM QUOTES
// ==============================================

const quotes=[

"Together is a beautiful place to be ❤️",

"Two Hearts One Soul 💞",

"Forever Starts Here 💍",

"Love Never Ends 💖",

"Made For Each Other 🌹"

];

setInterval(()=>{

console.log(

quotes[Math.floor(Math.random()*quotes.length)]

);

},5000);




// ==============================================
// FINAL MESSAGE
// ==============================================

console.log("Wedding Invitation Website Loaded Successfully ❤️");
// ===============================================
// PART 3D
// ROYAL WEDDING INVITATION
// ===============================================



// ===============================================
// MOBILE MENU
// ===============================================

const menuBtn=document.querySelector("#menuBtn");
const nav=document.querySelector("nav ul");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("show");

});

}



// ===============================================
// CURSOR SPARKLE
// ===============================================

document.addEventListener("mousemove",(e)=>{

const star=document.createElement("span");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=e.clientX+"px";

star.style.top=e.clientY+"px";

star.style.pointerEvents="none";

star.style.fontSize="18px";

star.style.zIndex="99999";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},500);

});




// ===============================================
// WELCOME POPUP
// ===============================================

setTimeout(()=>{

alert(
"💍 Welcome!\n\nThank you for visiting our Wedding Invitation Website ❤️"
);

},3000);




// ===============================================
// ADD TO CALENDAR
// ===============================================

const calendarBtn=document.getElementById("calendarBtn");

if(calendarBtn){

calendarBtn.addEventListener("click",()=>{

alert(

"📅 Add To Calendar Feature Coming Soon."

);

});

}




// ===============================================
// WEDDING DAY MESSAGE
// ===============================================

const today=new Date();

const wedding=new Date("December 25,2026");

if(

today.getDate()==wedding.getDate()

&&

today.getMonth()==wedding.getMonth()

&&

today.getFullYear()==wedding.getFullYear()

){

alert("🎉 Today is Our Wedding Day ❤️");

}




// ===============================================
// RANDOM FLOWERS
// ===============================================

const flowers=["🌸","🌺","🌼","💮"];

setInterval(()=>{

const flower=document.createElement("div");

flower.innerHTML=

flowers[Math.floor(Math.random()*flowers.length)];

flower.style.position="fixed";

flower.style.left=Math.random()*100+"vw";

flower.style.top="-30px";

flower.style.fontSize="25px";

flower.style.pointerEvents="none";

flower.style.zIndex="9999";

document.body.appendChild(flower);

let fall=setInterval(()=>{

flower.style.top=(flower.offsetTop+4)+"px";

if(flower.offsetTop>window.innerHeight){

clearInterval(fall);

flower.remove();

}

},20);

},1200);




// ===============================================
// THANK YOU MESSAGE
// ===============================================

console.log("Part 3D Loaded Successfully");
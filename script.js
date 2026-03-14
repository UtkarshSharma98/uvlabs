/* Waitlist form */

document.getElementById("waitlistForm").addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("message").innerText =
"Thank you! You are on the UV Labs waitlist.";

});

/* Scroll animation */

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".fade").forEach(el=>{
observer.observe(el);
});

/* Animated background */

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*1,
vy:(Math.random()-0.5)*1
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#6366f1";

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;
if(p.y<0||p.y>canvas.height)p.vy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fill();

});

requestAnimationFrame(animate);

}

animate();
function sendMessage(){

let input=document.getElementById("chat-input");
let msg=input.value.trim();

if(msg==="") return;

let chat=document.getElementById("chat-messages");

chat.innerHTML+="<div><b>You:</b> "+msg+"</div>";

let reply=getAIResponse(msg);

setTimeout(()=>{
chat.innerHTML+="<div><b>AI:</b> "+reply+"</div>";
chat.scrollTop=chat.scrollHeight;
},500);

input.value="";

}

function getAIResponse(message){

message=message.toLowerCase();

if(message.includes("uv labs"))
return "UV Labs is an AI-powered healthcare technology company building intelligent health systems.";

if(message.includes("founder"))
return "UV Labs was founded by the visionary behind this project.";

if(message.includes("ai"))
return "Our mission is to apply artificial intelligence to improve healthcare insights and accessibility.";

if(message.includes("hello")||message.includes("hi"))
return "Hello! I'm the UV Labs AI assistant. How can I help you?";

return "Thanks for your question! UV Labs is currently building next-generation AI healthcare technology.";
}
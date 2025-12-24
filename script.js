let btn = document.getElementById('btn');
let main = document.querySelector('main');

let rig = Math.floor(Math.random()*100);
let bot = Math.floor(Math.random()*100);

btn.style.right = rig + "%";
btn.style.bottom = bot + "%";

addEventListener('mousemove', (e)=>{
    document.body.style.setProperty("--x",e.clientX + 'px');
    document.body.style.setProperty("--y",e.clientY + 'px');
})

const h1 = document.querySelector("h1");
const text = h1.innerText;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iterations = 0;

function randomText(){
    const str = text.split("").map((char, index)=>{
        if(index < iterations)
              return char;
        return characters.split("")[Math.floor(Math.random()*52)]
    }).join("")
    h1.innerText = str;
    iterations += 0.2;

}

h1.addEventListener('mouseenter',function(){
    h1.style.color = "black";
})

h1.addEventListener('mouseout',function(){
    h1.style.color = "white";
})


btn.addEventListener('click',function(){
    main.style.backgroundImage = "radial-gradient(100px at var(--x) var(--y), transparent, transparent),var(--img)";
})

btn.addEventListener("click", () => {
  btn.style.display = "none";
  main.style.cursor = "default";
});


setInterval(randomText, 30)
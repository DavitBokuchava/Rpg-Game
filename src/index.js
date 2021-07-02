import './index.scss';
import Sensewalk from './assets/person.png'

console.log('  Hi, it is a first lesson of Js Marathon Pro Edition ');
console.log('###########  change something ');

const canvas = document.getElementById("gameField");
const ctx = canvas.getContext('2d');
const spriteW=48;
const spriteH=48;
let cycle = 0;
const shots = 3;
let pY = 250;
let pX = 250;
let bottomPressed = false;
let upPressed = false;
let rightPressed = false;
let leftPressed = false;
let direction = 0;
function keyDownHandler(e){
    console.log(e.keyCode, e.key)
    // e.key === "ArrowDown"
    if(e.keyCode === 40){
        direction = 0
        bottomPressed = true;
    }
    // e.key === "ArrowUp"
    if(e.keyCode === 38){
        direction=144;
         upPressed = true;
    }
    //  e.key === "ArrowRight"
    if( e.keyCode === 39){
        direction=96;
         rightPressed = true;
    }
    // e.key === "ArrowLeft"
    if( e.keyCode === 37 ){
        direction=48;
         leftPressed = true;
    }
    
}
console.log(bottomPressed)
// function keyDownHandler(e){
//     console.log(e.keyCode,e.key)
// }
function keyUpHandler(e){
    console.log(e.keyCode, e.key)
    // e.key === "ArrowDown"
    if(e.keyCode === 40){
         bottomPressed = false;
    }
    // e.key === "ArrowUp"
    if(e.keyCode === 38){
         upPressed = false;
    }
    //  e.key === "ArrowRight"
    if( e.keyCode === 39){
         rightPressed = false;
    }
    // e.key === "ArrowLeft"
    if( e.keyCode === 37 ){
         leftPressed = false;
    }
}

const img = document.createElement('img');
img.src=Sensewalk;
img.addEventListener('load',()=>{
     setInterval(()=>{
        if(bottomPressed){
            if(pY < 550){
                pY += 10;
                cycle = (cycle+1)%shots;
            }
            console.log(pY,"#$#$####### pY")
        }
        if(upPressed){
            if(pY > 0){
                pY -= 10;
                cycle = (cycle+1)%shots;
            }
        }
        if(leftPressed){
            
            if(pX > 0){
                pX -= 10
                cycle = (cycle+1)%shots;
            };
        }
        if(rightPressed){
            if(pX < 560){
                pX += 10
                cycle = (cycle+1)%shots;
            };
            console.log(pX,"#$#$####### pX")
        }
        ctx.clearRect(0,0,600,600);
        ctx.drawImage(img,cycle*spriteW,direction,spriteW,spriteH,pX,pY,48,48)
    },100)

})
document.addEventListener('keydown', keyDownHandler)
document.addEventListener('keyup', keyUpHandler)


let myW = document.getElementById("world");

let map = [
    { posX: 0, posY: 0, posZ: 200, rotX: 0, rotY: 0, rotZ: 0, background: "#3437db", width: 1200, height: 800, opacity: 0.1, name: "square" },
    { posX: 0, posY: 0, posZ: -200, rotX: 0, rotY: 0, rotZ: 0, background: "#400147", width: 1200, height: 800, opacity: 1, name: "square" },
    { posX: 0, posY: 400, posZ: 0, rotX: 90, rotY: 0, rotZ: 0, background: "#34db9b", width: 1200, height: 800, opacity: 1, name: "square" },
    { width: 1500, height: 800, opacity: 1, name: "square" },
    { posX: -600, posY: 0, posZ: 0, rotX: 0, rotY: 90, rotZ: 0, background: "#180e4c", width: 1200, height: 800, opacity: 0.5, name: "square" },
    { posX: 800, posY: 0, posZ: 0, rotX: 0, rotY: 90, rotZ: 0, background: "#461010", width: 800, height: 1400, opacity: 0.3, name: "square" }
];

function drawMap(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        let square = document.createElement("div");
        square.id = `${myArray[i].name}0${i + 1}`;
        square.style.position = `absolute`;
        square.style.backgroundColor = myArray[i].background ? myArray[i].background : "orange";
        square.style.width = `${myArray[i].width}px`;
        square.style.height = `${myArray[i].height}px`;
        square.style.opacity = myArray[i].opacity;
        square.style.transform = `translate3d(${myArray[i].posX}px, ${myArray[i].posY}px, ${myArray[i].posZ}px) rotateX(${myArray[i].rotX}deg) rotateY(${myArray[i].rotY}deg) rotateZ(${myArray[i].rotZ}deg)`;
        myW.appendChild(square);
    }
}

let map2 = [
    { posX: 700, posY: 200, posZ: 0, rotX: 0, rotY: 0, rotZ: 0, background: "#7c96ec", width: 200, height: 200, opacity: 1, name: "window" },
    { posX: 200, posY: 200, posZ: -100, rotX: 0, rotY: 0, rotZ: 0, background: "#4a0404", width: 250, height: 500, opacity: 1, name: "window" },
    { posX: 320, posY: 440, posZ: 100, rotX: 0, rotY: 0, rotZ: 0, background: "#000000", width: 10, height: 10, opacity: 1, name: "window" }
];

drawMap(map2);
drawMap(map);

var dz = 0;
var vel = 0;
var dx = 0;
var velx =0;
document.addEventListener("keydown", (e) => {
    if(e.code == "ArrowUp" || e.code == "KeyW"){
        vel = 5;
    }
    if(e.code == "ArrowDown"){
        vel = -5;
    }
    if(e.code == "ArrowLeft"){
        velx = 5;
    }
    if(e.code == "ArrowRight"){
        velx = -5;
    }
});


document.addEventListener("keyup", (e) => {
    vel = 0;
    velx = 0;
});

function update() {
    myW.style.transform = `translate3d(${dx}px, ${0}px, ${dz}px)`;
    dz += vel;
    dx += velx;
}

let game = setInterval(update, 100);
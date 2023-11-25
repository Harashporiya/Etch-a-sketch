const clearColor = document.getElementById('clear')
clearColor.onclick = function () {
  window.location.reload();
}

const colorPicker = document.getElementById('colorPicker');
const boxColor = document.getElementById('box');
const changeColorBtn = document.getElementById('changeColorBtn');
const Insidediv = document.querySelectorAll(".InsideDiv");
let color = "black";

Insidediv.forEach(element => {
  element.addEventListener('mouseenter', function () {
    element.style.backgroundColor = color;
  // changeColor();
  })
});

changeColorBtn.addEventListener('click', function () {
   //colorActive = true;
  const selectedColor = colorPicker.value;
  color = selectedColor;
  if (rainbowActive) {
    clearInterval(rainbow1);
   console.log("stop")
     rainbowActive = false;
  } 
});


const eraserBtn = document.getElementById('eraserButton');
eraserBtn.addEventListener('click', function (){
   //colorActive = true;
  color = "white";
  if (rainbowActive) {
    clearInterval(rainbow1);
   console.log("stop")
     rainbowActive = false;
  } 
});


colorPicker.addEventListener('input', function() {
   //colorActive = true; 
  color = colorPicker.value;
});

const rainbow = document.getElementById('rainbow');
const rainbowButton = document.getElementById('rainbowButton');
const box2 = document.getElementById('box');
let rainbow1;
let hue = 0;

let colorActive = true;
let rainbowActive = false;

rainbowButton.onclick = function() {
  
   if (rainbowActive) {
     clearInterval(rainbow1);
    console.log("stop")
      rainbowActive = false;
   }  else {
     startRainbow();
     rainbowActive = true;
   }
};

function startRainbow() {
  console.log("Start")
  colorActive = false;
  rainbow1 = setInterval(changeColor, 100);
  
}
function changeColor() {
  console.log("change color")
  hue = Math.floor(Math.random() * 360);
  color = `hsl(${hue}, 100%, 50%)`;
}

//  rainbowButton.addEventListener('click', function () {
//    changeColor();
//  });


function createDiv(input) {
  var box = document.getElementById("box");
  box.innerHTML = "";
  for (var i = 0; i < input * input; i++) {
    const Insidediv = document.createElement('div');
    Insidediv.classList.add("InsideDiv");
    box.appendChild(Insidediv);
    let height = 400 / input;
    let width = 600 / input;
    Insidediv.style.height = `${height}px`;
    Insidediv.style.width = `${width}px`;

  }
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function () {
  var input = document.getElementById("value_1").value;
  if (input > 60) {
    alert("max value is 60, more than 60 is not taken as input");
    window.location.reload();
  } else {
    createDiv(input)
  };
  const Insidediv = document.querySelectorAll(".InsideDiv");
  Insidediv.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.backgroundColor = color;
    })
  });
});




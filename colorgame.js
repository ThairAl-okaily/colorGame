

let colors = generatColors(6);

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("h1");
let pickedColor = pickcolor();

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++){
    //add init colors 
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        
        if(clickedColor === pickedColor) {
        messageDisplay.textContent="correct";
        changColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
       
        }
        else {
            this.style.background= "#232323";
            messageDisplay.textContent="Try again";
        }
        
    });

}


function generatColors(mod){
    //make an array
    let arr = [];
    // add rand colors to arr
    for (let i = 0; i < mod; i++){
        arr.push(randColors());
    }
    //return the same array
    return arr;

}

function randColors(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';

}

function pickcolor(){
    let ran = Math.floor(Math.random() * colors.length );
    return colors[ran];
}


function changColors(color){
    //loop all the squars 
    for (let i = 0; i < squares.length; i++){
        //change the color to mach the correct one
        squares[i].style.backgroundColor = color;
    }
    
}

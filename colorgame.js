

let colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(255, 0, 255)',
    'rgb(255, 255, 255)',
    'rgb(255, 0, 0)',
    'rgb(255, 0, 0)'
];

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
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
       
        }
        else {
            this.style.background= "#232323";
            messageDisplay.textContent="Try again";
        }
        
    });

}

function changColors(color){
    //loop all the squars 
    for (let i = 0; i < squares.length; i++){
        //change the color to mach the correct one
        squares[i].style.backgroundColor = color;
    }
    
}


function pickcolor(){
    let ran = Math.floor(Math.random() * colors.length );
    return colors[ran];
}
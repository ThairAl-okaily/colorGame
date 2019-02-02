

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
let pickedColor = colors[3];
colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++){
    //add init colors 
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor)
        alert ("matched");
        else {
            alert("wrong");
        }
        
    });

}




let numOfSquars = 6;
let colors = [];
let pickedColor;

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("h1");
const restetButton = document.getElementById("reset");
const modeButtons = document.querySelectorAll(".mode");



init();

function init (){
    setUpBtn();
    setUpSqrs();
    reset();
    }

function setUpSqrs(){
    for (let i = 0; i < squares.length; i++){
    
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            
            let clickedColor = this.style.backgroundColor;
            
            if(clickedColor === pickedColor) {
            messageDisplay.textContent="correct";
            changColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            restetButton.textContent= "Play again ?";
           
            }
            else {
                this.style.background= "#232323";
                messageDisplay.textContent="Try again";
            }
            
        });
    
    }

}



function setUpBtn(){
    for (let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquars = 3: numOfSquars = 6;
            reset();
            
        });
    }
}

function reset(){
    colors = generatColors(numOfSquars);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent="";
    restetButton.textContent = "new colors";

    for (let i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display= "block";
        } else{
            squares[i].style.display= "none";
        }
    }
    h1.style.background = "steelblue";
}


// REFACTORATED TO RESET() 
// easyBtn.addEventListener("click", function (){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numOfSquars = 3;
//     colors = generatColors(numOfSquars);
//     pickedColor = pickcolor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++){
//         if (colors[i]){
//             squares[i].style.background = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
//  });

// hardBtn.addEventListener("click", function () {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numOfSquars = 6;
//     colors = generatColors(numOfSquars);
//     pickedColor = pickcolor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++){
    
//             squares[i].style.background = colors[i];
//             squares[i].style.display = "block";
        
//     }
// });




restetButton.addEventListener("click", function () {
    // REFACTORATED TO RESET

    // generate new colores 
    // colors = generatColors(numOfSquars);

    // pickedColor = pickcolor();
    // colorDisplay.textContent = pickedColor;

    // for (let i = 0; i < squares.length; i++){
    //     //add init colors 
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.background = "steelblue";
    // messageDisplay.textContent="";
    // this.textContent = "new colors";
    reset();
});





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

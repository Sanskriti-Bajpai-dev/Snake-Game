// Game constants & variables
let direction = {x:0 , y:0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y:15}
]
food = {x:6, y:7};
 
// Game functions
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime);
    //if((ctime - lastPaintTime)/1000 < 1/speed)
    {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine(){
    // Part 1: Updating the snake array & Food

    // Part 2: Display the snake and food
    //Display the snake
    board.innerHTML="";  // is it not necessary to make a reference to an element using it's id with document.getElementById()?
    
    snakeArr.forEach((e, index)=>{
        snakeElement= document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snake');
        if(index === 0){
            snakeElement.classList.add('head');
        }
        board.appendChild(snakeElement);

    });

    //Display the food
    foodElement= document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

}











//Main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = {x:0, y:1} // if any button is pressed on the keyboard the snake is generated and 
                        //it starts moving in the downward direction i.e. in the direction of y=1.
    moveSound.play();
    switch (e.key) { // here e is the event fired and key tells about the key pressed
        case "ArrowUp":
            console.log("ArrowUp")
            break;
        
        case "ArrowDown":
            console.log("ArrowDown")
            break;
                
        case "ArrowLeft":
                console.log("ArrowLeft")
                break;
        
        case "ArrowRight":
        console.log("ArrowRight")
        break;
            
    
        default:
            break;
    }
                    });
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let count = 0;
let win =false;

let turn =true//player

const winpattrn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],

];

const resetGame = ()=>{
    turn =true; 
    count = 0;
    win = false;
    enableboxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){             //player O
            box.innerText = "O";
            box.style.color = "red"; 
            turn=false;
            count++;

        } else{                   //player X  
            box.innerText = "X";
            box.style.color = "green"; 
            turn=true;
            count++;
        }
        box.disabled =true;
        checkWinner();
        if(count===9 && win===false){
            showDraw();
        }
    });
});
const enableboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
}
const disableboxes =()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}
const showWinner = (winner)=>{
    msg.innerText =`congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();

}
const showDraw =()=>{
    msg.innerText =`ITS A DRAW`;
    msgContainer.classList.remove("hide");
    disableboxes();

}
const checkWinner = ()=>{
    for( let pattern of winpattrn){
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;

        if(post1val !="" && post2val !="" && post3val !=""){
            if(post1val===post2val && post2val===post3val){
                showWinner(post1val);
                win=true;
                return;
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
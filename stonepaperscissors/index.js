let stone=document.querySelector("#stone");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");
let win=document.querySelector("#win");
let score=document.querySelector("#score");
let tie=document.querySelector("#tie");
let compScore=document.querySelector("#compScore");
let reset=document.querySelector("#reset");

let compChoice;

stone.onclick= function(){
    compChoice=Math.floor(Math.random()*3)+1;

    if (compChoice==1) {
        win.textContent=`Tie`;
        tie.textContent++;
    }

    else if (compChoice==2) {
        win.textContent=`Lose`;
        compScore.textContent++;
    }

    else if (compChoice==3) {
        win.textContent=`Win`;
        score.textContent++;
    }
}

paper.onclick= function(){
    compChoice=Math.floor(Math.random()*3)+1;

    if (compChoice==1) {
        win.textContent=`Win`;
        score.textContent++;
    }

    else if (compChoice==2) {
        win.textContent=`Tie`;
        tie.textContent++;
    }

    else if (compChoice==3) {
        win.textContent=`Lose`;
        compScore.textContent++;
    }
}

scissors.onclick= function(){
    compChoice=Math.floor(Math.random()*3)+1;

    if (compChoice==1) {
        win.textContent=`Lose`;
        compScore.textContent++;
    }

    else if (compChoice==2) {
        win.textContent=`Win`;
        score.textContent++;
    }

    else if (compChoice==3) {
        win.textContent=`Tie`;
        tie.textContent++;
    }
}

reset.onclick= function(){
    tie.textContent=0;
    score.textContent=0;
    compScore.textContent=0;
}


let userscore=0,compscore=0,userWin=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#userScore");
const compscorePara=document.querySelector("#computerScore");
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userWin)
    {
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText=`You Win!Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        
    }
    else{
        compscore++;
        compscorePara.innerText=compscore;
        msg.innerText=`You Lose! ${compchoice} beats your ${userchoice}`;        
        msg.style.backgroundColor="red";
        
    }
}
const drawgame=()=>{
    msg.innerText=`It's a Draw!`;
    msg.style.backgroundColor="#081b31";
}
const playgame=(userchoice)=>{
    const compchoice=genratecompchoice();
    if(userchoice===compchoice){
        //draw
        drawgame();
    }
    else{
        if(userchoice==="rock"){
            userWin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userWin=compchoice==="scissor"?false:true;
        }
        else{
            userWin=compchoice==="rock"?false:true;
        }
        showwinner(userWin,userchoice,compchoice);
    }
}
const genratecompchoice=()=>{
    let options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
let userScore = document.querySelector('#user-score')
let compScore = document.querySelector('#comp-score')
let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg')
let userpoint=0;
let comppoint=0;

let gencompchoice = () => {
    const options = ['stone', 'paper', 'scissors']
    const randidx = Math.floor(Math.random() * 3)
    return options[randidx]
}
const drawGame = () => {
    msg.innerText='Draw . Play again'
    msg.style .backgroundColor='#457b9d'

}
let showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText=`You win. Your ${userchoice} beats comp ${compchoice}`
        msg.style .backgroundColor='green'
    }else{
        msg.innerText=`You lose.Computer  ${compchoice} beats your ${userchoice}`
        msg.style .backgroundColor='red'


        
    }
}
let count =(userwin)=>{
    if(userwin){
        userpoint++
        userScore.innerText=userpoint
    }else{
        comppoint++
        compScore.innerText=comppoint

    }
}
let playGame = (choice) => {
    let userchoice = choice
    let compchoice = gencompchoice()
    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userwin = true
        if (userchoice === 'stone') {
            userwin = compchoice == 'paper' ? false : true; 
        }else if(userchoice==='paper'){
            userwin=compchoice=='stone'? true :false
        }else {
            userwin=compchoice=='stone'? false :true 
        }
        showwinner(userwin ,userchoice,compchoice)
        count(userwin)
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const choiceId = choice.getAttribute('id')
        playGame(choiceId)
    })
})
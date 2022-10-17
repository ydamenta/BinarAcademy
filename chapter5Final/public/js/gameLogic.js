class Game{
    constructor(player,winOrLose){
        this._player = player;
        this._winOrLose = winOrLose;
    }

    setWinOrLose(winOrLose){
        this._winOrLose = winOrLose;
    }

    getWinOrLose(){
        return this._winOrLose;
    }

    setPlayer(player){
        this._player = player;
    }

    getPlayer(){
        return this._player;
    }      
}

class Player extends Game{
    constructor(player,winOrLose,choices){
        super(player,winOrLose);
        this._choices = choices;

    }
    setChoice(choices){
        this._choices = choices;
    }

    getChoice(){
        return this._choices;
    }      
    celebrateWin(){
        return `Hooray!`;
    }
    cry(){
        return `Huuuuu!`;
    }    
}

let gameCollections = [];
let player1 = new Player('Damenta');

const playerPick = (id) => {
    document.getElementById(id).style.backgroundColor = 'grey';
    document.getElementById(id).style.borderRadius = '5%';
    let playerChoice = document.getElementById(id).alt;
    let allChoice = randomComputerPick(playerChoice);
    let winner = decideWinner(allChoice);
    console.log(winner);
    removeClickElementforGame();
    saveGame(winner,playerChoice);
    //console.log(winner);
}

const randomComputerPick = (id) =>{
    let generalChoices = ['batu','kertas','gunting'];
    let playerChoices = generalChoices.indexOf(id);
    let randomComputerChoice = Math.floor(Math.random()*3);
    let idComp = 'com-'+generalChoices[randomComputerChoice];
    document.getElementById(idComp).style.backgroundColor='red';
    document.getElementById(idComp).style.borderRadius = '5%';
    return [playerChoices,randomComputerChoice];
};

const decideWinner = (arrChoices) => {
    console.log(arrChoices);
    let labelWinner;
    let flagWinner = 0;
    if(arrChoices[0] === arrChoices[1]){
        labelWinner = '<br>Draw!';
    } else if(arrChoices[0] === 0 && arrChoices[1] === 1){
        labelWinner = '<br>Comp <br> Win<br>';
    } else if(arrChoices[0] === 0 && arrChoices[1] === 2){
        flagWinner = 1;
        labelWinner = '<br>Player 1 <br> Win<br>';
    } else if(arrChoices[0] === 1 && arrChoices[1] === 0){
        flagWinner = 1;
        labelWinner = '<br>Player 1 <br> Win<br>';
    } else if(arrChoices[0] === 1 && arrChoices[1] === 2){
        labelWinner = '<br>Comp <br> Win<br>';
    } else if(arrChoices[0] === 2 && arrChoices[1] === 0){
        labelWinner = '<br>Comp <br> Win<br>';
    } else if(arrChoices[0] === 2 && arrChoices[1] === 1){
        flagWinner = 1;
        labelWinner = '<br>Player 1 <br> Win<br>';
    }

    let textElementWinner = document.getElementById('label-winner');
    textElementWinner.innerHTML = labelWinner;
    textElementWinner.style.textTransform = 'uppercase';
    textElementWinner.style.backgroundColor = 'green';
    textElementWinner.style.fontSize = '140%';
    textElementWinner.style.width = '85%';
    textElementWinner.style.height = '60%';
    textElementWinner.style.color = 'white';
    textElementWinner.style.fontWeight = 'bolder';
    textElementWinner.style.letterSpacing = '0.3rem';    

    document.querySelector('#label-winner').style.transform = 'rotate(-30deg)';

    return flagWinner;
}

const removeClickElementforGame = () =>{
    document.getElementById('ply-batu').removeAttribute('onclick');
    document.getElementById('ply-kertas').removeAttribute('onclick');
    document.getElementById('ply-gunting').removeAttribute('onclick');
}

const refreshGame = () =>{
    window.location.reload();
};

const saveGame = (flagWinner, choices) => {
    player1.setChoice(choices);
    if(flagWinner === 1){
        player1.setWinOrLose('win');
        console.log(player1.celebrateWin());
    } else{
        player1.setWinOrLose('lose');
        console.log(player1.cry());
    }
    console.log(player1);

};
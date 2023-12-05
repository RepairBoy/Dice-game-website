
// function diceRoll1(randNumber){

    
//     if(randNumber === 1){
//         document.querySelector(".player1 img").setAttribute("src","./images/dice1.png");
//     }
//     else if(randNumber === 2){
//         document.querySelector(".player1 img").setAttribute("src","./images/dice2.png");
//     }
//     else if(randNumber === 3){
//         document.querySelector(".player1 img").setAttribute("src","./images/dice3.png");
//     }
//     else if(randNumber === 4){
//         document.querySelector(".player1 img").setAttribute("src","./images/dice4.png");
//     }
//     else if(randNumber === 5){
//         document.querySelector(".player1 img").setAttribute("src","./images/dice5.png");
//     }
// }

// function diceRoll2(randNumber){
//     if(randNumber === 1){
//         document.querySelector(".player2 img").setAttribute("src","./images/dice1.png");
//     }
//     else if(randNumber === 2){
//         document.querySelector(".player2 img").setAttribute("src","./images/dice2.png");
//     }
//     else if(randNumber === 3){
//         document.querySelector(".player2 img").setAttribute("src","./images/dice3.png");
//     }
//     else if(randNumber === 4){
//         document.querySelector(".player2 img").setAttribute("src","./images/dice4.png");
//     }
//     else if(randNumber === 5){
//         document.querySelector(".player2 img").setAttribute("src","./images/dice5.png");
//     }
// }


//initialy used function and loops to change the dices but shortened it afterwords.

document.querySelector("button").addEventListener("click",diceRoll);

function diceRoll(){            //will be called when the button is pressed
    var randNumber1 = Math.floor(Math.random() * 6) + 1;
    var randNumber2 = Math.floor(Math.random() * 6) + 1;        //random number form 1 to 6

    var randImageSource1 = "./images/dice" + randNumber1 + ".png";
    var randImageSource2 = "./images/dice" + randNumber2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src",randImageSource1);
    document.querySelectorAll("img")[1].setAttribute("src",randImageSource2);


    if(randNumber1 === randNumber2){
        document.querySelector("h1").innerText = "😳Draw!!!😳";
    }   
    else if (randNumber1 > randNumber2){
        document.querySelector("h1").innerText = "🚩Player 1 Wins";
    }
    else{
        document.querySelector("h1").innerText = "Player 2 Wins🚩";
    }
}

// document.querySelector("img.img1").setAttributeNode("src", "/images/randomImage1;");

function DiceRoll() {

    let randomNumber1 = Math.floor(Math.random()*6)+1;
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+randomNumber1+".PNG");
    
    let randomNumber2 = Math.floor(Math.random()*6)+1;
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".PNG");

    if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
    }

    if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
            }

    if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!"
    }
}
    
    DiceRoll();

    

//selecting the parent of tiles
let row = document.querySelector('.mainrow')
let gameClickcounter = 1
//adding every piece with js
function addpiece() {
    let piece = document.createElement('div')
    piece.setAttribute('class', `col-3 col-sm-3 col-xs-3 brr piece`)
    row.appendChild(piece)
}


//random number
let random = Math.floor((Math.random() * 11) + 1)

for (let i = 0; i < 12; i++) {
    addpiece()
}

// on click piece function
row.addEventListener('click', (e) => {
    if (e.target.className == 'col-3 col-sm-3 col-xs-3 brr piece') {
        if (amtjs < 100) {
            alert('Please Pay Atleast 100rs to Play a the game')
        }
        else {
            if(gameClickcounter == random){
                // console.log(random)
                gameover(e)
            }
            else{
                
                if (gameClickcounter < 12) {
    
                    gamelogic(e)
                }
                else {
                    alert('Game Over')
                }
            }
        }
    }
})


//amount remaining
let amntremain = document.querySelector('.amntremain')
let amtjs = 0
amntremain.innerHTML = `Amount Remaining: ${amtjs}`

//updating add amount

let addmnt = document.querySelector('.amtinput')
let addamtbtn = document.querySelector('.addamtbtn')
addamtbtn.addEventListener('click', (e) => {
    if (e) {
        amtjs = amtjs + Number(addmnt.value)
        if (confirm("Sure You Wanna Add This Amount")) {
            amntremain.innerHTML = `Amount Remaining: ${amtjs}`

            addmnt.value = ''

        } else {
            txt = "You pressed Cancel!";
        }

    }
})



//winnings Counter
let winnings = document.querySelector('.winnings')
let winningsjs = 0
winnings.innerHTML = `Total Winnings: ${winningsjs}`



//main game logic

function gamelogic(e) {

    e.target.setAttribute('class', 'col-3 col-sm-3 col-xs-3 brr piececlicked')
    amtjs = amtjs - 100
    amntremain.innerHTML = `Amount Remaining: ${amtjs}`
    gameClickcounter++
    if(gameClickcounter > 0 && 4 > gameClickcounter){

        winningsjs = winningsjs + 150
        winnings.innerHTML = `Total Winnings: ${winningsjs} <span style="color: lightgreen; fontweight: bold">50%</span>`
    }
    else if (gameClickcounter > 3 && 8 > gameClickcounter){
        
        winningsjs = winningsjs * 2
        winnings.innerHTML = `Total Winnings: ${winningsjs} <span style="color: lightgreen; fontweight: bold">200%</span>`
    }else if(gameClickcounter > 7 && 12 > gameClickcounter){
        
        winningsjs = winningsjs * 3
        winnings.innerHTML = `Total Winnings: ${winningsjs} <span style="color: lightgreen; fontweight: bold">300%</span>`
    }

}

//game over function if someone clicks red 
function gameover(e){
    
    e.target.setAttribute('class', 'col-3 col-sm-3 col-xs-3 brr piececlickedred')
    resetgame()
    
    // alert('Sorry Game Over')
}

function resetgame(){

    amtjs = 0
    winningsjs = 0
    random = 0
    amntremain.innerHTML = `Amount Remaining: ${amtjs}`
    winnings.innerHTML = `Total Winnings: ${winningsjs}`
    gameClickcounter = 0
    showgameover()
}



function showgameover(){
    let godiv = document.querySelector('.gameover')

    godiv.style.display = 'flex'

    restart()
}



function restart(){
    let restart_btn = document.querySelector('.res')
    restart_btn.addEventListener('click', ()=>{
        location.reload();
    })

}
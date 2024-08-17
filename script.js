//selecting the parent of tiles
let row = document.querySelector('.mainrow')

//adding every piece with js
function addpiece() {
    let piece = document.createElement('div')
    piece.setAttribute('class', 'col-3 col-sm-3 col-xs-3 brr piece')
    row.appendChild(piece)
}


//random number
let random = Math.floor((Math.random() * 12) + 1)

for (let i = 0; i < 12; i++) {
    addpiece()
}

// on click piece function
row.addEventListener('click', (e) => {
    if (e.target.className == 'col-3 col-sm-3 col-xs-3 brr piece') {

        e.target.setAttribute('class', 'col-3 col-sm-3 col-xs-3 brr piececlicked')
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
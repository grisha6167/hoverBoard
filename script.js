const board = document.getElementById('board')
const SQUARES_NUMBER = 49


for(let i = 0;i < SQUARES_NUMBER;i++){
const square = document.createElement('div')
square.classList.add('square')
square.addEventListener('mouseover', ()=>{
    console.log('over')
})
square.addEventListener('mouseleave', ()=>{
    console.log('leave')
})
board.append(square)
}
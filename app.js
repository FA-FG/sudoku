/*-------------------------------- Constants --------------------------------*/
// const winningCombos = []

/*---------------------------- Variables (state) ----------------------------*/

let board = [
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '']
]
let answerBoard = [
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '']
]
let winner = false

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')

/*-------------------------------- Functions --------------------------------*/
squareEls.forEach(function (element) {
  element.contentEditable = 'true'
})

function getNum(event) {
  let text = event.target.textContent
  if (!/^[0-9]$/.test(text)) {
    event.target.textContent = ''
  } else {
    let index = event.target.id
    let row = Math.floor(index / 9)
    let col = index % 9
    board[row][col] = text
    console.log(board)
    return text
  }
}

// const handleClick = (event) => {
//   const index = event.target.id
//   console.log(index)
// }

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
  square.addEventListener('input', getNum)
})
squareEls.forEach((square) => {
  square.addEventListener('click', handleClick)
})

/*---------------------------- Variables (state) ----------------------------*/
const puzzles = [
  {
    puzzle:
      '46710080591283560708564719229635147070892035153140892607306451062451978315978364',
    solution:
      '467192835912835647385647192296351478748926351531478926873264519624519783159783264',
    difficulty: 'easy'
  },

  {
    puzzle:
      '072010860610700904340200500060850042807600195025193006106320070790006251080500039',
    solution:
      '572914863618735924349268517961857342837642195425193786156329478793486251284571639',
    difficulty: 'medium'
  },
  {
    puzzle:
      '038700941270914350400385706780649135904103072015807094857096403140578260029401087',
    solution:
      '538762941276914358491385726782649135964153872315827694857296413143578269629431587',
    difficulty: 'easy'
  },
  {
    puzzle:
      '004026518805104270021078943003059827007002400058740090030080709780291050509367182',
    solution:
      '374926518895134276621578943413659827967812435258743691132485769786291354549367182',
    difficulty: 'hard'
  },
  {
    puzzle:
      '000038702001002950270500300163780290529061074487920631008049000356817429042653080',
    solution:
      '695138742831472956274596318163784295529361874487925631718249563356817429942653187',
    difficulty: 'easy'
  },
  {
    puzzle:
      '060090043049005000000620019200540080010038790007109402070052060001000000905010078',
    solution:
      '562791843149385627738624519293547186416238795857169432374852961681973254925416378',
    difficulty: 'hard'
  },
  {
    puzzle:
      '300001509000009276070000010058000001034506080010000050093105027100002005500603100',
    solution:
      '362871549481359276975264318258937461734516982619428753893145627146792835527683194',
    difficulty: 'hard'
  },
  {
    puzzle:
      '740009053000370010000600080805006000000530200004007895009702008102863970600900021',
    solution:
      '741289653286375419593641782825496137917538246364127895439712568152863974678954321',
    difficulty: 'hard'
  },
  {
    puzzle:
      '700000403409605217030200800608000905053000040210009368096028170500074600804090502',
    solution:
      '762981453489635217135247896648713925953862741217459368396528174521374689874196532',
    difficulty: 'hard'
  },
  {
    puzzle:
      '354076002010209345829530701143027580000410076200958004405361927631792450972845603',
    solution:
      '354176892716289345829534761143627589598413276267958134485361927631792458972845613',
    difficulty: 'easy'
  },
  {
    puzzle:
      '098712360000600008604000200460005019179000580003100002306901400000274806200060100',
    solution:
      '598712364721643958634589271462835719179426583853197642386951427915274836247368195',
    difficulty: 'hard'
  },
  {
    puzzle:
      '002400081009050430006800972700105008008694300095008014980043060050006103200017000',
    solution:
      '372469581819752436546831972734125698128694357695378214981243765457986123263517849',
    difficulty: 'hard'
  },
  {
    puzzle:
      '467100805912835607085647192296351470708920351531408926073064510624519783159783064',
    solution:
      '467192835912835647385647192296351478748926351531478926873264519624519783159783264',
    difficulty: 'easy'
  },
  {
    puzzle:
      '006513000001904036302060010063000000480070390009030065000007050000640000657001920',
    solution:
      '896513247571924836342768519263459781485176392719832465134297658928645173657381924',
    difficulty: 'hard'
  },
  {
    puzzle:
      '100560930039000006050000000010648579400795012000123864500200148300401600800956003',
    solution:
      '182564937739812456654379281213648579468795312975123864596237148327481695841956723',
    difficulty: 'hard'
  },
  {
    puzzle:
      '000900000000020030200541608890370500027068190600090000102000040004600820365004000',
    solution:
      '718936452456827931239541678891372564527468193643195287182759346974613825365284719',
    difficulty: 'hard'
  },
  {
    puzzle:
      '230080509040003060900015023700190058089072000000048790004060900010009004690050201',
    solution:
      '231687549845923167967415823723196458489572316156348792374261985512839674698754231',
    difficulty: 'hard'
  },
  {
    puzzle:
      '000300840002781600108006037025003108070068004806004970784019350509842016261037489',
    solution:
      '697325841342781695158496237425973168973168524816254973784619352539842716261537489',
    difficulty: 'Medium'
  },
  {
    puzzle:
      '100060380600845020007000000009106800030780400005032001908000060050200094742003500',
    solution:
      '124967385693845127587321649479156832231789456865432971918574263356218794742693518',
    difficulty: 'hard'
  },
  {
    puzzle:
      '230408056507000000000100002006840500340015700700309000000060000002700089000000140',
    solution:
      '231478956567293814894156372126847593349615728785329461918564237452731689673982145',
    difficulty: 'hard'
  },
  {
    puzzle:
      '080006900302049000410870052000654709940100005007032461020060090000000240690001000',
    solution:
      '785216934362549817419873652231654789946187325857932461524768193178395246693421578',
    difficulty: 'hard'
  },
  {
    puzzle:
      '002400890070010000600030500569203780400601020020079346700320000290106400054790263',
    solution:
      '312465897975812634648937512569243781437681925821579346786324159293156478154798263',
    difficulty: 'hard'
  },
  {
    puzzle:
      '000001200245000096100542783692750008457083629081090075073618942800400530924375861',
    solution:
      '738961254245837196169542783692754318457183629381296475573618942816429537924375861',
    difficulty: 'easy'
  },
  {
    puzzle:
      '208000941605149823410328067523690184960481352841253706752906430384572619196834200',
    solution:
      '238765941675149823419328567523697184967481352841253796752916438384572619196834275',
    difficulty: 'easy'
  },
  {
    puzzle:
      '200000008010825700506370400008007910003050000900063500000504076009002100005001800',
    solution:
      '297416358314825769586379421658247913173958642942163587831594276469782135725631894',
    difficulty: 'hard'
  },
  {
    puzzle:
      '980000010031000290025000000590008600403002905000309741846020359000436072000890000',
    solution:
      '984263517731584296625917438597148623413672985268359741846721359159436872372895164',
    difficulty: 'hard'
  },
  {
    puzzle:
      '400713600007080450800406009005140800000005010701208000906000000500029041034870000',
    solution:
      '459713628167982453823456179395147862682395714741268935916534287578629341234871596',
    difficulty: 'hard'
  },
  {
    puzzle:
      '078506039619400080500897206060008073000900020400005600392754861157680002806030950',
    solution:
      '278516439619423785534897216965248173783961524421375698392754861157689342846132957',
    difficulty: 'easy'
  },
  {
    puzzle:
      '864103900192000384035090020016538792009041006308060400600019508981457203057080100',
    solution:
      '864123957192675384735894621416538792529741836378962415643219578981457263257386149',
    difficulty: 'medium'
  },
  {
    puzzle:
      '007006005000200000004800217000030090070000056800650732000003000020080100003700089',
    solution:
      '287316945915274368634895217562437891371928456849651732798163524426589173153742689',
    difficulty: 'hard'
  },
  {
    puzzle:
      '400060170005080003700201000006908002080000036190003700000705260002000040039140580',
    solution:
      '428369175915487623763251894356978412287514936194623758841735269572896341639142587',
    difficulty: 'hard'
  },
  {
    puzzle:
      '109436020040005600568091070317809006004600190956072004092300045000928760781064002',
    solution:
      '179436528243785619568291473317849256824653197956172384692317845435928761781564932',
    difficulty: 'medium'
  },
  {
    puzzle:
      '701825900960074302800960010400250809527000040098000520689732450053090078000010003',
    solution:
      '731825964965174382842963715416257839527389146398641527689732451153496278274518693',
    difficulty: 'meduim'
  },
  {
    puzzle:
      '403000090200000108005109042040050086380000050050060730000013000028004000500780020',
    solution:
      '413628597279435168865179342147352986386947251952861734694213875728594613531786429',
    difficulty: 'hard'
  }
]

const testPuzzle = [
  {
    puzzle:
      '460092835912835647385647192296351478748926351531478926873264519624519783159783264',
    solution:
      '467192835912835647385647192296351478748926351531478926873264519624519783159783264',
    difficulty: 'easy'
  },
  {
    puzzle:
      '007192835912835647385647192296351478748926351531478926873264519624519783159783264',
    solution:
      '467192835912835647385647192296351478748926351531478926873264519624519783159783264',
    difficulty: 'easy'
  },
  {
    puzzle:
      '467100835912835647385647192296351478748926351531478926873264519624519783159783264',
    solution:
      '467192835912835647385647192296351478748926351531478926873264519624519783159783264',
    difficulty: 'hard'
  },
  {
    puzzle:
      '467192835912835600385647192296351478748926351531478926873264519624519783159783264',
    solution:
      '467192835912835647385647192296351478748926351531478926873264519624519783159783264',
    difficulty: 'medium'
  },
  {
    puzzle:
      '467192835912835640085647192296351478748926351531478926873264519624519783159783264',
    solution:
      '467192835912835647385647192296351478748926351531478926873264519624519783159783264',
    difficulty: 'medium'
  },
  {
    puzzle:
      '467192835912835647385007192296351478748926351531478926873264519624519783159783264',
    solution:
      '467192835912835647385647192296351478748926351531478926873264519624519783159783264',
    difficulty: 'easy'
  }
]

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
let boardArray = board.flat()

let winner = false
let hintActive = false
let noteActive = false

/*------------------------ Cached Element References ------------------------*/
// ELEMENT SELECTORS
const squareEls = document.querySelectorAll('.sqr')
const textElements = document.querySelectorAll('.text')
const noteElements = document.querySelectorAll('.note')
const secElement = document.querySelectorAll('.subsec')
// MESSAGES
const msg = document.querySelector('#msg')
const winMsg = document.querySelector('#win')
// BUTTONS
const hintButton = document.querySelector('#hint-btn')
const noteButton = document.querySelector('#note-btn')
const startButton = document.querySelector('#start-btn')
const restButton = document.querySelector('#reset-btn')
const nextLink = document.querySelector('#next-link')

/*-------------------------------- Functions --------------------------------*/

// TO DISABLE ALL BOXES BEFORE THE GAME STARTS
textElements.forEach((input) => {
  input.readOnly = true
})

//////////////////////////////////////////////////////////////////////////////////////////////

// CHECK THE URL WHEN GAME PAGE IS LOADED AND SAVE IT IN A VAR
let selectedDifficulty = ''

// get the difficulty attribute
const urlParams = new URLSearchParams(window.location.search)
const difficultyFromUrl = urlParams.get('difficulty')
if (difficultyFromUrl) {
  selectedDifficulty = difficultyFromUrl
}

//////////////////////////////////////////////////////////////////////////////////////////////

// TO GET SELECTED DIFFICULTY BUTTONS
function handleDifficultyClick(difficulty) {
  selectedDifficulty = difficulty // Save the difficulty level

  // RESET SELECTED CLASS FOR ALL BUTTONS
  const buttons = document.querySelectorAll('.dif')
  buttons.forEach((button) => {
    button.classList.remove('selected')
  })

  // ADD SELECTED CLASS FOR SELECTED BUTTON
  const selectedButton = document.getElementById(`${difficulty}`)
  selectedButton.classList.add('selected')

  // Show the next link that leads to the game page
  nextLink.style.display = 'inline-block'

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Update the link's href attribute
  nextLink.href = `game-page.html?difficulty=${selectedDifficulty}`
}
//////////////////////////////////////////////////////////////////////////////////////////////
// Testing puzzle: GITTING A FILTERED ARRAY WITH ONLY SELECTED DIFFICALTY PUZZLE
const getFilteredPuzzles = (difficulty) => {
  return testPuzzle.filter((puzzle) => puzzle.difficulty === difficulty)
}

// TESTING ONLY
const selectRandomPuzzle = () => {
  if (selectedDifficulty) {
    // FILTER THE PUZZLE AACCORDING TO DIFFICULTY
    const filteredPuzzles = getFilteredPuzzles(selectedDifficulty)
    const random = Math.floor(Math.random() * filteredPuzzles.length)
    // SPLITING BECAUSE ITS A LONG TEXT OF NUMBERS
    let choice = filteredPuzzles[random].puzzle
    let splitChoice = choice.split('')
    let ans = filteredPuzzles[random].solution
    let ansSplit = ans.split('')
    let massege = filteredPuzzles[random].difficulty.toLocaleUpperCase()
    let randomArray = [splitChoice, ansSplit, massege]
    return randomArray
  }
}

// // Actual puzzle: GITTING A FILTERED ARRAY WITH ONLY SELECTED DIFFICALTY PUZZLE
// const getFilteredPuzzles = (difficulty) => {
//   return puzzles.filter((puzzle) => puzzle.difficulty === difficulty)
// }

// // ACTUAL PUZZLE
// // CHOOSE A RANDOM PUZZLE FROM THE PUZZLE ARRAY - RETURN AN ARRAY OF CHOICE-
// const selectRandomPuzzle = () => {
//   if (selectedDifficulty) {
//     const filteredPuzzles = getFilteredPuzzles(selectedDifficulty)
//     const random = Math.floor(Math.random() * filteredPuzzles.length)
//     // SPLITING BECAUSE ITS A LONG TEXT OF NUMBERS
//     let choice = filteredPuzzles[random].puzzle
//     let splitChoice = choice.split('')
//     let ans = filteredPuzzles[random].solution
//     let ansSplit = ans.split('')
//     let massege = filteredPuzzles[random].difficulty.toLocaleUpperCase()
//     let randomArray = [splitChoice, ansSplit, massege]
//     return randomArray
//   }
// }

// GET THE CHOSEN PUZZLE RETURNED FROM THE FUNCTION
let randomArray = selectRandomPuzzle()

// A RENDER FUNCTIN THAT WILL START THE GAME
const render = () => {
  addRandomToBoardArray(randomArray)
  displayPuzzle()
  disableEdit()
  dislayDifficalty(randomArray)
  winner = false
  hintActive = false
  noteActive = false
  // ADD EVENT LESTENER ON ALL INPUT BOXES FOR HIGHTLIGH
  if (winner) return
  textElements.forEach((square) => {
    square.addEventListener('mouseover', highlight)
  })
}

// GET THE RANDOM PUZZLE CHOOSEN AND APPEND IT TO THE BOARD ARRAY
const addRandomToBoardArray = (randomArray) => {
  boardArray.forEach((element, index) => {
    boardArray[index] = parseInt(randomArray[0][index])
    if (parseInt(randomArray[0][index]) === 0) {
      boardArray[index] = ''
    }
  })
}

// DISPLAY THE PUZZLE DIFFICALTY
const dislayDifficalty = (puzzleDiff) => {
  let massege = puzzleDiff[2]
  msg.textContent = `Difficalty:  ${massege}`
}

// TO DISABLE THE EDIT OF PUZZLE BOXES AND ENABLING THE EDIT OF THE REST BOXES
const disableEdit = () => {
  boardArray.forEach((ele, idx) => {
    if (boardArray[idx]) {
      textElements[idx].classList.add('puzzle-num')
      textElements[idx].readOnly = true // PREVENT EDITING
    } else {
      textElements[idx].classList.add('game-num')
      textElements[idx].readOnly = false //ENABLE EDITING
    }
  })
}

// DISPLAY THE PUZLLE BY GETTING THE NUMBERS FROM THE BOARD ARRAY
const displayPuzzle = () => {
  boardArray.forEach((element, index) => {
    if (squareEls[index]) {
      if (textElements[index]) {
        textElements[index].value = element
      }
      if (element === '') {
        textElements[index].style.color = 'black' // SET THE COLOR OF THE USER INPUT NUMBERS
      } else {
        textElements[index].style.color = '#444444' // SET THE COLOR OF THE PUZZLE NUMBERS
      }
    }
  })
  // HIDE AND DISPLAY BUTTONS
  hintButton.style.display = 'inline'
  noteButton.style.display = 'inline'
  startButton.style.display = 'none'
}

// WILL GET THE BOARDARRAY AND COMPARE IT WITH PUZZLE ANSWERS ARRAY
const compareAnswers = (answers) => {
  if (boardArray.every((val, idx) => val == answers[1][idx])) {
    winner = true
    winMsg.textContent = 'You solved the puzzle!'

    document.querySelector('#board').classList.add('fade-out')
    document.querySelector('#win-div').classList.add('visible')
    document.querySelector('#out').classList.add('visible')

    boardArray.forEach((ele, idx) => {
      squareEls[idx].contentEditable = false
    })
    // HIDE AND SHOW BUTTONS
    hintButton.style.display = 'none'
    noteButton.style.display = 'none'
    restButton.style.display = 'inline'
    // SHOW IMAGES AND PLAY SOUND
    document.querySelector('#left').style.visibility = 'visible'
    document.querySelector('#right').style.visibility = 'visible'
    document.getElementById('youdid').textContent = 'You did it!'
    document.getElementById('win-sound').play()

    // DISABLE INPUT LISTNER
    textElements.forEach((square, idx) => {
      square.removeEventListener('mouseover', highlight)
    })
  }
}

// TOGGLE BUTTON BETWEEN GREEN AND RED
const togglebutton = (active, button) => {
  if (active) {
    button.style.backgroundColor = 'rgb(22, 160, 133)' // Green
  } else {
    button.style.backgroundColor = 'rgb(231, 76, 60)' // Red
  }
}

// COMPARE THE ANSWERS AND TOGGLE COLORS
const hint = () => {
  if (hintActive) {
    squareEls.forEach((square, idx) => {
      if (
        textElements[idx].style.color === 'rgb(231, 76, 60)' ||
        textElements[idx].style.color === 'rgb(46, 204, 113)'
      ) {
        // REMOVE ALL CLASSES TO RETURN TO NORMAL GAME STYLE
        textElements[idx].style.color = 'black'
        boardArray.forEach((ele, idx) => {
          squareEls[idx].classList.remove('incorrect')
          squareEls[idx].classList.remove('correct')
        })
      }
    })
  } else {
    boardArray.forEach((ele, idx) => {
      if (!boardArray[idx]) {
        textElements[idx].style.color = 'black'
        // Mark incorrect answers in red
      } else if (boardArray[idx] != randomArray[1][idx]) {
        textElements[idx].style.color = 'rgb(231, 76, 60)'
        // ADD AND REMOVE CLASS FOR PROPER ANIMATION
        squareEls[idx].classList.add('incorrect')
        squareEls[idx].classList.remove('correct')
      } else {
        // Mark correct answers in green
        if (textElements[idx].style.color === 'black') {
          textElements[idx].style.color = 'rgb(46, 204, 113)'
          // ADD AND REMOVE CLASS FOR PROPER ANIMATION
          squareEls[idx].classList.add('correct')
          squareEls[idx].classList.remove('incorrect')
        }
      }
    })
  }
  // TOGGLE BUTTON COLOR
  hintActive = !hintActive
  togglebutton(hintActive, hintButton)
}

// GET THE USER INPUT AND APPEND IT TO THE BOARD ARRAY
const getNum = (event) => {
  let text = event.target.value.trim() // Get the input value
  let index = event.target.closest('.sqr').id

  // Check if the input is only one valid digit (1-9)
  //  ^start, $ends, [1-9]match
  if (text.length === 1 && /^[1-9]$/.test(text)) {
    event.target.style.color = 'black'
    hintActive = false
    togglebutton(hintActive, hintButton)

    textElements.forEach((text, idx) => {
      if (text.classList.contains('game-num')) {
        text.style.color = 'black'
        squareEls[idx].classList.remove('correct')
        squareEls[idx].classList.remove('incorrect')
      }
    })

    boardArray[index] = parseInt(text)

    // ADD AND REMOVE CLASSS TO APPLAY ANIMATION
    event.target.classList.add('animated')

    // Remove the animation after it completes
    setTimeout(() => {
      event.target.classList.remove('animated')
    }, 250)
  } else {
    event.target.value = ''
  }
  // TO CHECK IF WINNER
  compareAnswers(randomArray)
}

// SHOW AND HIDE THE NOTE BOX
const showNoteBox = () => {
  noteActive = !noteActive
  boardArray.forEach((ele, idx) => {
    // ADDING NOTE TO JUST THE ANSWERS BOXES
    if (textElements[idx].style.color !== 'rgb(68, 68, 68)') {
      if (noteActive) {
        // If noteActive is true, show the note box
        noteElements[idx].style.display = 'block'
        noteElements[idx].contentEditable = true // Allow editing

        // Listen for input events on the note box to make sure its only on digit
        noteElements[idx].addEventListener('input', (event) => {
          const text = event.target.textContent.trim()

          if (text.length === 1 && /^[1-9]$/.test(text)) {
          } else {
            // Invalid input, clear the note box
            noteElements[idx].textContent = ''
          }
        })
      } else {
        // When noteActive is false, hide the note box
        noteElements[idx].style.display = 'none'
      }
    }
  })
  togglebutton(noteActive, noteButton)
}

// RESET THE GAME FOR PLAY AGAIN
const resetGame = () => {
  boardArray = Array.from({ length: 81 }, () => '')
  // REMOVE ANIMATION CLASSES AND IMAGES
  document.querySelector('#board').classList.remove('fade-out')
  document.querySelector('#win-div').classList.remove('visible')
  document.querySelector('#out').classList.remove('visible')
  document.querySelector('#left').style.visibility = 'hidden'
  document.querySelector('#right').style.visibility = 'hidden'

  // CLEAR BOARD TEXT VALUES OF THE BOXES
  textElements.forEach((input, idx) => {
    input.value = ''
    textElements[idx].classList.remove('game-num')
    textElements[idx].classList.remove('puzzle-num')
  })

  squareEls.forEach((ele, idx) => {
    // ele.classList.remove('incorrect')
    ele.classList.remove('correct')
    ele.classList.remove('correct')
  })

  // CLEAR NOTES
  noteElements.forEach((note) => {
    note.style.display = 'none' // Hide note boxes
    note.contentEditable = false // Make them non-editable initially
  })

  // RESET DIFFICULTY
  msg.textContent = 'Difficulty:'

  // RESET WINNER
  winner = false
  winMsg.textContent = '' // Clear any winning message

  startButton.style.display = 'inline'

  // GET ANOTHER PUZZLE
  randomArray = selectRandomPuzzle()
  render()

  // RESET BUTTONS
  hintButton.style.display = 'inline'
  noteButton.style.display = 'inline'
  hintButton.style.backgroundColor = '#ddd'
  noteButton.style.backgroundColor = 'inli#dddne'
  restButton.style.display = 'none'
}

let highlightedSquare = null

// HIGHLIGHT ROW AND COLUMN
const highlight = (event) => {
  // Remove previous highlights
  removeHighlights()

  // GIT THE CLICKED SQUARE Index
  const hover = event.target
  const hoverBox = hover.parentElement
  const hoverIndex = hoverBox.id

  // Calculate row and column index
  const colIndex = hoverIndex % 9
  const squareRow = hoverBox.closest('.subsec')

  // highlight the row
  squareRow.classList.add('highlighted')

  // Highlight the entire column
  for (let i = colIndex; i < squareEls.length; i += 9) {
    squareEls[i].classList.add('highlighted')
  }

  // Keep track of the currently highlighted square
  highlightedSquare = hoverBox
}

// Function to remove all highlights
const removeHighlights = () => {
  squareEls.forEach((square) => square.classList.remove('highlighted'))
  highlightedSquare = null
  secElement.forEach((sec) => sec.classList.remove('highlighted'))
}

/*----------------------------- Event Listeners -----------------------------*/

// Remove highlight when hover is outside the box
document.body.addEventListener('mouseover', (event) => {
  if (!event.target.classList.contains('text') && highlightedSquare !== null) {
    removeHighlights()
  }
})

// Attach click event listeners to buttons in game page
if (window.location.pathname.includes('game-page.html')) {
  textElements.forEach((input) => {
    input.addEventListener('input', getNum)
  })

  startButton.addEventListener('click', render)

  hintButton.addEventListener('click', hint)

  noteButton.addEventListener('click', showNoteBox)

  restButton.addEventListener('click', resetGame)
} else {
  document
    .getElementById('easy')
    .addEventListener('click', () => handleDifficultyClick('easy'))
  document
    .getElementById('medium')
    .addEventListener('click', () => handleDifficultyClick('medium'))
  document
    .getElementById('hard')
    .addEventListener('click', () => handleDifficultyClick('hard'))
}

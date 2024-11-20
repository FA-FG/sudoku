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
      '006513000001904036302060010063000000480070390009030065000007050000640000657001920',
    solution:
      '896513247571924836342768519263459781485176392719832465134297658928645173657381924',
    difficulty: 'medium'
  },
  {
    puzzle:
      '100560930039000006050000000010648579400795012000123864500200148300401600800956003',
    solution:
      '182564937739812456654379281213648579468795312975123864596237148327481695841956723',
    difficulty: 'medium'
  },
  {
    puzzle:
      '000900000000020030200541608890370500027068190600090000102000040004600820365004000',
    solution:
      '718936452456827931239541678891372564527468193643195287182759346974613825365284719',
    difficulty: 'easy'
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
    difficulty: 'medium'
  },
  {
    puzzle:
      '100060380600845020007000000009106800030780400005032001908000060050200094742003500',
    solution:
      '124967385693845127587321649479156832231789456865432971918574263356218794742693518',
    difficulty: 'medium'
  },
  {
    puzzle:
      '230408056507000000000100002006840500340015700700309000000060000002700089000000140',
    solution:
      '231478956567293814894156372126847593349615728785329461918564237452731689673982145',
    difficulty: 'medium'
  },
  {
    puzzle:
      '080006900302049000410870052000654709940100005007032461020060090000000240690001000',
    solution:
      '785216934362549817419873652231654789946187325857932461524768193178395246693421578',
    difficulty: 'easy'
  },
  {
    puzzle:
      '002400890070010000600030500569203780400601020020079346700320000290106400054790263',
    solution:
      '312465897975812634648937512569243781437681925821579346786324159293156478154798263',
    difficulty: 'medium'
  },
  {
    puzzle:
      '000001200245000096100542783692750008457083629081090075073618942800400530924375861',
    solution:
      '738961254245837196169542783692754318457183629381296475573618942816429537924375861',
    difficulty: 'hard'
  },
  {
    puzzle:
      '208000941605149823410328067523690184960481352841253706752906430384572619196834200',
    solution:
      '238765941675149823419328567523697184967481352841253796752916438384572619196834275',
    difficulty: 'hard'
  },
  {
    puzzle:
      '200000008010825700506370400008007910003050000900063500000504076009002100005001800',
    solution:
      '297416358314825769586379421658247913173958642942163587831594276469782135725631894',
    difficulty: 'easy'
  },
  {
    puzzle:
      '980000010031000290025000000590008600403002905000309741846020359000436072000890000',
    solution:
      '984263517731584296625917438597148623413672985268359741846721359159436872372895164',
    difficulty: 'medium'
  },
  {
    puzzle:
      '400713600007080450800406009005140800000005010701208000906000000500029041034870000',
    solution:
      '459713628167982453823456179395147862682395714741268935916534287578629341234871596',
    difficulty: 'medium'
  },
  {
    puzzle:
      '078506039000400080500897206060008073000900020400005600392704860100080000006030950',
    solution:
      '278516439619423785534897216965248173783961524421375698392754861157689342846132957',
    difficulty: 'medium'
  },
  {
    puzzle:
      '864103900192000380000090020000000000009041006308060400600019508981457203057080100',
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
    difficulty: 'medium'
  },
  {
    puzzle:
      '109436020040005600568091070317809006004600190956072004092300045000928760781064002',
    solution:
      '179436528243785619568291473317849256824653197956172384692317845435928761781564932',
    difficulty: 'easy'
  },
  {
    puzzle:
      '701825900960074302800960010400250809527000040098000520689732450053090078000010003',
    solution:
      '731825964965174382842963715416257839527389146398641527689732451153496278274518693',
    difficulty: 'medium'
  },
  {
    puzzle:
      '403000090200000108005109042040050086380000050050060730000013000028004000500780020',
    solution:
      '413628597279435168865179342147352986386947251952861734694213875728594613531786429',
    difficulty: 'hard'
  },
  {
    puzzle:
      '760000320003178090809623015100904002305000040482050670930200057010039084504000003',
    solution:
      '761495328253178496849623715176984532395762841482351679938246157617539284524817963',
    difficulty: 'medium'
  },
  {
    puzzle:
      '008190600340200700900007305000906050100350000605740023409000030281004976500800200',
    solution:
      '758193642346285791912467385834926157127358469695741823479612538281534976563879214',
    difficulty: 'medium'
  },
  {
    puzzle:
      '007900024506000300400003090000098050809007006000001980600000501985000470710200809',
    solution:
      '137985624596742318428613795361498257859327146274561983642879531985136472713254869',
    difficulty: 'hard'
  },
  {
    puzzle:
      '004538017067902053503006094706425038300769002052301006609203781870694320235817409',
    solution:
      '924538617167942853583176294796425138318769542452381976649253781871694325235817469',
    difficulty: 'medium'
  },
  {
    puzzle:
      '100503690520019000300400701030107905000908310601350078000670203067000040210004000',
    solution:
      '174583692526719834389426751438167925752948316691352478945671283867235149213894567',
    difficulty: 'easy'
  },
  {
    puzzle:
      '807010200310000060052040000080001607000857910070002000501600030090130000743020000',
    solution:
      '867913245314285769952746381485391627236857914179462853521679438698134572743528196',
    difficulty: 'hard'
  },
  {
    puzzle:
      '007160002300007059000500704809000000000251000105090340700000090001942000034700621',
    solution:
      '597164832346827159218539764869473215473251986125698347752316498681942573934785621',
    difficulty: 'medium'
  },
  {
    puzzle:
      '050320769640578020032100805526001937300700050987653410475000283293045176108237594',
    solution:
      '851324769649578321732169845526481937314792658987653412475916283293845176168237594',
    difficulty: 'hard'
  },
  {
    puzzle:
      '000013002072500000391700000005139084400200100000040005004070008060480090700900243',
    solution:
      '546813972872596431391724856625139784437258169189647325954372618263481597718965243',
    difficulty: 'easy'
  },
  {
    puzzle:
      '057200604428769053000514200284900760671025049005476820800390500792050430013040978',
    solution:
      '157283694428769153369514287284931765671825349935476821846397512792158436513642978',
    difficulty: 'medium'
  },
  {
    puzzle:
      '728195634436872159951043820509431760004720985060008410640587391100264578075319240',
    solution:
      '728195634436872159951643827589431762314726985267958413642587391193264578875319246',
    difficulty: 'easy'
  },
  {
    puzzle:
      '028006007704010005000703006001030004296400500007000908100004032682071400500892070',
    solution:
      '328956147764218395915743286851639724296487513437125968179564832682371459543892671',
    difficulty: 'medium'
  },
  {
    puzzle:
      '530200040764900012208000000800100030900057001050803900000000493042009000005700260',
    solution:
      '539218746764935812218674359876192534923457681451863927187526493642389175395741268',
    difficulty: 'medium'
  },
  {
    puzzle:
      '080430700040006381307000400002100649001000238006080510900800000000900073500710964',
    solution:
      '685431792249576381317298456832157649751649238496382517973864125164925873528713964',
    difficulty: 'medium'
  },
  {
    puzzle:
      '092008040030405000456029378500010407641037500009050810300201050000580000005793180',
    solution:
      '192378645837465291456129378583912467641837529729654813378241956914586732265793184',
    difficulty: 'medium'
  },
  {
    puzzle:
      '312698400754231090986475231069784352807052010520906084435129007678543020090867503',
    solution:
      '312698475754231698986475231169784352847352916523916784435129867678543129291867543',
    difficulty: 'easy'
  },
  {
    puzzle:
      '000305004000006100000492000500604910100927508007800040705208430304000005062040700',
    solution:
      '276315894439786152851492376528634917143927568697851243715268439384179625962543781',
    difficulty: 'hard'
  },
  {
    puzzle:
      '259176384716483905843529671098612703102347850437958216984265107371894562625031498',
    solution:
      '259176384716483925843529671598612743162347859437958216984265137371894562625731498',
    difficulty: 'medium'
  },
  {
    puzzle:
      '003005400108402059470030182500241803307000021281007540009000238830720000600053004',
    solution:
      '923185467168472359475936182596241873347568921281397546759614238834729615612853794',
    difficulty: 'medium'
  },
  {
    puzzle:
      '380100002094003001206005000030000007000937018400200300105072890903080176748001050',
    solution:
      '387169542594723681216845739831456927652937418479218365165372894923584176748691253',
    difficulty: 'hard'
  },
  {
    puzzle:
      '159000800204080690600400523400028706965740230800600410020004385000002060000805002',
    solution:
      '159236847234587691687419523413928756965741238872653419726194385598372164341865972',
    difficulty: 'medium'
  },
  {
    puzzle:
      '910000280600090001840010035004000302780402000203600870068104597000087003071003408',
    solution:
      '917345286635298741842716935154879362786432159293651874368124597429587613571963428',
    difficulty: 'medium'
  },
  {
    puzzle:
      '700000005023095000409720300604009500300508070015670039930250807000004050000900003',
    solution:
      '768413295123895764459726318674139582392548176815672439936251847287364951541987623',
    difficulty: 'medium'
  },
  {
    puzzle:
      '031870020206013704007000000009000072315607000020090600900700100000080490070140208',
    solution:
      '431876925256913784897254316689431572315627849724598631948762153162385497573149268',
    difficulty: 'medium'
  },
  {
    puzzle:
      '189732654654891273273546189418279305920653408365184027706415892892367541541928736',
    solution:
      '189732654654891273273546189418279365927653418365184927736415892892367541541928736',
    difficulty: 'hard'
  },
  {
    puzzle:
      '529387416073461905610900378195020647238070591740519832060045280451298760982736154',
    solution:
      '529387416873461925614952378195823647238674591746519832367145289451298763982736154',
    difficulty: 'medium'
  },
  {
    puzzle:
      '001800453300270000059310078236700010905000047407501000160400000090007030000060021',
    solution:
      '721896453348275196659314278236749815915628347487531962163452789592187634874963521',
    difficulty: 'easy'
  },
  {
    puzzle:
      '863000002407038050195000073700020538580004207930780400600890000259003004308050960',
    solution:
      '863579142427138659195246873746921538581364297932785416614897325259613784378452961',
    difficulty: 'medium'
  },
  {
    puzzle:
      '403700002602301900910060003009038006100027584000040007560800001097410268001000000',
    solution:
      '483759612672381945915264873749538126136927584258146397564892731397415268821673459',
    difficulty: 'hard'
  },
  {
    puzzle:
      '040609030107800295398205064586002700402701050710006300050300970604190020023067010',
    solution:
      '245619837167843295398275164586932741432781659719456382851324976674198523923567418',
    difficulty: 'medium'
  },
  {
    puzzle:
      '083700000500002090090006030010500809700168245806040317020635070000000500040000681',
    solution:
      '683791452574382196291456738412573869739168245856249317128635974967814523345927681',
    difficulty: 'medium'
  },
  {
    puzzle:
      '300006104156400793240070650005020406004031589890000000060040302437219860500300940',
    solution:
      '378596124156482793249173658715928436624731589893654217961845372437219865582367941',
    difficulty: 'easy'
  },
  {
    puzzle:
      '090502100738096000001700006012307800007060013000981052100005400009000080020009600',
    solution:
      '694532178738196245251748396912357864587264913346981752163875429479623581825419637',
    difficulty: 'medium'
  },
  {
    puzzle:
      '067000900013209467005600000090025006700900500500800391000040038038001274270386100',
    solution:
      '467138925813259467925674813391425786786913542542867391159742638638591274274386159',
    difficulty: 'medium'
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

// CHECK THE URL WHEN GAME PAGE IS LOADED AND SAVE IT IN A VAR
let selectedDifficulty = ''

const urlParams = new URLSearchParams(window.location.search)
const difficultyFromUrl = urlParams.get('difficulty')
if (difficultyFromUrl) {
  selectedDifficulty = difficultyFromUrl
}

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

  // Update the link's href attribute
  nextLink.href = `game-page.html?difficulty=${selectedDifficulty}`
}

// // Testing puzzle: GITTING A FILTERED ARRAY WITH ONLY SELECTED DIFFICALTY PUZZLE
// const getFilteredPuzzles = (difficulty) => {
//   return testPuzzle.filter((puzzle) => puzzle.difficulty === difficulty)
// }

// // TESTING ONLY
// const selectRandomPuzzle = () => {
//   if (selectedDifficulty) {
//     // FILTER THE PUZZLE AACCORDING TO DIFFICULTY
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

// Actual puzzle: GITTING A FILTERED ARRAY WITH ONLY SELECTED DIFFICALTY PUZZLE
const getFilteredPuzzles = (difficulty) => {
  return puzzles.filter((puzzle) => puzzle.difficulty === difficulty)
}

// ACTUAL PUZZLE
// CHOOSE A RANDOM PUZZLE FROM THE PUZZLE ARRAY - RETURN AN ARRAY OF CHOICE-
const selectRandomPuzzle = () => {
  if (selectedDifficulty) {
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

// Attach click event listeners to buttons in index page
if (window.location.pathname === '/unit1/hw/sudoku/') {
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
// })

// Attach click event listeners to buttons in game page
if (window.location.pathname.includes('game-page.html')) {
  textElements.forEach((input) => {
    input.addEventListener('input', getNum)
  })

  startButton.addEventListener('click', render)

  hintButton.addEventListener('click', hint)

  noteButton.addEventListener('click', showNoteBox)

  restButton.addEventListener('click', resetGame)
}

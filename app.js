const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')
const progressEl = document.querySelector('#progress')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess);
    render()
})

const render = () => {

    puzzleEl.innerHTML = ''

    game1.getPuzzle().split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
    guessesEl.textContent = game1.getStatusMessage()
    }

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 4)
    console.log(puzzle)
    render()

}

document.querySelector('#reset').addEventListener('click',startGame)

startGame()

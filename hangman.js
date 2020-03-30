class Hangman {
    constructor(word,remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters  = []
        this.correctLetters = []
        this.status = "playing"
    }

    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if(this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) { 
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    
    getPuzzle() {
        let puzzle = ''

        this.word.forEach((char) => {
            if(this.guessedLetters.includes(char) || char === ' '){
                puzzle += char
            } else{
                puzzle +='*'
            }   
        })
        return puzzle;
    }
    
    makeGuess(guess) {
        guess = guess.toLowerCase();

        const isUnique = !this.guessedLetters.includes(guess);
        const isbadGuess = !this.word.includes(guess);
    
        if(this.status !== "playing"){
            return
        } 
        if(isUnique){
            this.guessedLetters.push(guess)
        } 
        if(isUnique && isbadGuess){
            this.remainingGuesses --;
        }
        if(isUnique && !isbadGuess){
            this.correctLetters.push(guess)
        }

        this.calculateStatus()
    }
    
    getStatusMessage() {
        if(this.status === "playing") {
            return `Guesses  left: ${this.remainingGuesses}`
    
        }
        if(this.status  === "failed") {
            return `Nice Try! the world was: ${this.word.join('').toUpperCase()}`
        }
        else{
            return `Great work! You guessed the word: ${this.word.join('').toUpperCase()}`
        }
    }
}

        


   

import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
  const { gameOver, setGameOver, correctWord, currentAttempt } = useContext(AppContext)
  return (
    <div className="GameOver">
      <h3>{gameOver.guessedWord ? "You Gorrectly Guessed" : "You Failed"}</h3>
      <h1>Corrcet Word: {correctWord}</h1>
      {gameOver.guessedWord && (<h3>You guessed in {currentAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver
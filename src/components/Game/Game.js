import React from 'react'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import Banner from '../Banner'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guessResults, setGuessResults] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('')

  function addResult(result) {
    const upperCaseResult = result.toUpperCase()
    const nextResults = [...guessResults, upperCaseResult]
    setGuessResults(nextResults)

    if (upperCaseResult === answer) {
      setGameStatus({ outcome: 'won', count: guessResults.length + 1 })
    } else if (nextResults.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus({ outcome: 'lost', answer: answer })
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput addResult={addResult} disableInput={Boolean(gameStatus)} />
      <Banner status={gameStatus} />
    </>
  )
}

export default Game

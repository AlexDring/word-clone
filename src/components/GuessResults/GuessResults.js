import React from 'react'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from '../../components/Guess'

function GuessResults({ guessResults, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <p key={num} className="guess">
          <Guess guess={guessResults[num]} answer={answer} />
        </p>
      ))}
    </div>
  )
}

export default GuessResults

import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Cell({ letter, status }) {
  let cellClass = status ? `${status} cell` : 'cell'
  return <span className={cellClass}>{letter}</span>
}

function Guess({ guess, answer }) {
  let checkedGuess = checkGuess(guess, answer)

  return (
    <>
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={checkedGuess ? checkedGuess[num].letter : undefined}
          status={checkedGuess ? checkedGuess[num].status : undefined}
        />
      ))}
    </>
  )
}

export default Guess

import React from 'react'

function GuessInput({ addResult, disableInput }) {
  const [guess, setGuess] = React.useState('')

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault()
        console.log({ guess })
        addResult(guess)
        setGuess('')
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={disableInput}
        style={{ textTransform: 'uppercase' }}
        value={guess}
        required={true}
        minLength={5}
        maxLength={5}
        onChange={(e) => setGuess(e.target.value)}
      />
    </form>
  )
}

export default GuessInput

import React from 'react'

function Banner({ status }) {
  return (
    <>
      {status.outcome === 'won' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {status.count} guesses</strong>.
          </p>
        </div>
      )}
      {status.outcome === 'lost' && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{status.answer}</strong>.
          </p>
        </div>
      )}
    </>
  )
}

export default Banner

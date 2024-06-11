import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  // tallenna napit omaan tilaansa

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log('Increasing good count, prev value', good)
    setGood(good +1)
  }

  const handleNeutralClick = () => {
    console.log('Increasing neutral count, prev value', neutral)
    setNeutral(neutral +1)
  }

  const handleBadClick = () => {
    console.log('Increasing bad count, prev value', bad)
    setBad(bad +1)
  }

  return (
    <div>
      <h1>give feedback </h1>
    <Button handleClick={handleGoodClick} text='good' />
    <Button handleClick={handleNeutralClick} text='neutral' />
    <Button handleClick={handleBadClick} text='bad' />
    <h1>statistics</h1>
    <p>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}
    </p>
    </div>
  )
}

export default App
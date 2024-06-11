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
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    console.log('Increasing good count, prev value', good)
    const newGood = good +1
    setGood(newGood)
    setTotal(newGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    console.log('Increasing neutral count, prev value', neutral)
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    setTotal(good + newNeutral + bad)

  }

  const handleBadClick = () => {
    console.log('Increasing bad count, prev value', bad)
    const newBad = bad +1
    setBad(newBad)
    setTotal(good + neutral + newBad)
  }

  const statAverage = () => (
    (good+bad+neutral)/total
  )

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
      bad {bad}<br/>
      total {total}<br/>
      average {(good+bad*-1)/total}<br/>
      positive {(good/total)*100} %
    </p>
    </div>
  )
}

export default App
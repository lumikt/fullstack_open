import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const SatisticLine = ({ text, value }) => {
  if (text === 'positive') {
    return (
      <>{text} {value} % <br/></>
    )
  }
  return (
  <>{text} {value} <br/></>
  )
}

const Statistics = ({ good, neutral, bad, total }) => {
  const average = Math.round(((good+bad*-1)/total)*100)/100
  const positive = Math.round((good/total) * 10000)/100
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>
      <SatisticLine text='good' value={good} />
      <SatisticLine text='neutral' value={neutral} />
      <SatisticLine text='bad' value={bad} />
      <SatisticLine text='all' value={total} />
      <SatisticLine text='average' value={average} />
      <SatisticLine text='positive' value={positive} />
      </p>
    </div>
  )
}


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

  return (
    <div>
      <h1>give feedback </h1>
    <Button handleClick={handleGoodClick} text='good' />
    <Button handleClick={handleNeutralClick} text='neutral' />
    <Button handleClick={handleBadClick} text='bad' />
    <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App
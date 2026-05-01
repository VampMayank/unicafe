import { useState } from 'react'

const Statistics =(props) => {
  const total = props.good + props.neutral + props.bad
  const average = total ? (props.good - props.bad) / total : 0
  const positive = total ? (props.good / total) * 100 : 0

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statisticline text="good" value={props.good} />
          <Statisticline text="neutral" value={props.neutral} />
          <Statisticline text="bad" value={props.bad} />
          <Statisticline text="average" value={average.toFixed(1)} />
          <Statisticline text="positive" value={`${positive.toFixed(1)}%`} />
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statisticline = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodto = () => {
  setGood(good + 1)
}

const setNeutralto = () => {
  setNeutral(neutral + 1)
}

const setBadto = () => {
  setBad(bad + 1)
}
  return (
    <div>
        <h1>give feedback</h1>
        <Button handleClick={setGoodto} text='good' />
        <Button handleClick={setNeutralto} text='neutral' />
        <Button handleClick={setBadto} text='bad' />
        <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App
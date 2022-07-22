import './varDefinitions.css'
import './App.css'

import ChangeTheme from './components/ChangeTheme'
import AppHeading from './components/AppHeading'
import { IROUNDFACTOR, EMPTYSTRING, APP_HEADING, APP_SUBHEADING } from './globalConstants'

import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setDisplay, pushToRecord, popRecord, clearGeneral, prepareResult } from "./features/calculatorSlice"

const App = () => {
  const dispatch = useDispatch()

  // benyttet useSelector for å spesifisere hvilke deler av state-objektet jeg ville ha tak i
  const display     = useSelector(state => state.calculator.value.display)
  const displayLine = useSelector(state => state.calculator.value.displayLine)
  // const record      = useSelector(state => state.calculator.value.record)

  // useState for å definere konstant med 'setter'
  //const [showResult, setShowResult] = useState(false)

// Button clicks
  const setButtonHandler = (event) => {
    dispatch(setDisplay(event.target.value))
    dispatch(pushToRecord(event.target.value))

  }

// clear out the calculator
  const clearHandler = () => {
    dispatch(clearGeneral())
  }

  // calculate and show the result
  const calculate = () => {
    const tempResult = Math.round((eval(displayLine.replace(/[^-()\d/*+.]/g, '')))*IROUNDFACTOR)/IROUNDFACTOR
    dispatch(prepareResult(tempResult))
  }

  // some regrets?  remove entries from right to left, one at a time
  const backSpace = () => {
    dispatch(popRecord())
  }

  return (
      <div className='mainSection'>
        <AppHeading />
        <ChangeTheme />
      </div>
  )
}

export default App

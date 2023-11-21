import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from './state/index'

function App() {

  const accountState = useSelector((state)=> state.account)
  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)

  return (
    <>
      <div>
        <h1>Camille's Bank of Redux</h1>
        <h2 style={{fontSize: 100, marginBottom: 0, marginTop: 0}}>{accountState}</h2>
        <button onClick={()=> depositMoney(1000)} >Deposit</button>
        <button onClick={()=> withdrawMoney(1000)} >Withdraw</button>
      </div>
    </>
  )
}

export default App

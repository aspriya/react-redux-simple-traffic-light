import React from 'react'
import setColor from '../actions/index.js'

export const Buttons = ({store}) => {
  const state = store.getState()

  return(
    <div style={{textAlign: 'center'}} >
      <button onClick = {() => store.dispatch(setColor('GO'))}
        disabled={state === 'GO' || state === 'CAUTION'}
        style={{cursor: 'pointer'}}>
        Go
      </button>

      <button onClick = {() => store.dispatch(setColor("CAUTION"))}
        disabled={state === 'CAUTION' || state === 'STOP'}
        style={{cursor: 'pointer'}}>
        Caution
      </button>

      <button onClick = {() => store.dispatch(setColor("STOP"))}
        disabled={state === 'STOP' || state === 'GO'}
        style={{cursor: 'pointer'}}>
        Stop
      </button>
    </div>
  )
}

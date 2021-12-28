import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export  const exampleThunkFunction = (dispatch, getState) => {
  const stateBefore = getState()
  console.log(`before increment: ${stateBefore.counter.value}`)
  dispatch(increment())
  const stateAfter = getState()
  console.log(`after  increment: ${stateAfter.counter.value}`)
}

export const logAndAdd = amount => {
  return (dispatch, getState) => {
      const stateBefore = getState()
      console.log(`before incrementByAmount(${amount}): ${stateBefore.counter.value}`)
      dispatch(incrementByAmount(amount))
      const stateAfter = getState()
      console.log(`after  incrementByAmount(${amount}): ${stateAfter.counter.value}`)
  }
}


export default counterSlice.reducer
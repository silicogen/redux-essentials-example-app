
import { configureStore } from "@reduxjs/toolkit"
import counterReducer, { increment, incrementByAmount } from "./counterSlice"
const store = configureStore({ reducer: counterReducer })


const exampleThunkFunction = (dispatch, getState) => {
    const stateBefore = getState()
    console.log(`Counter before: ${stateBefore.value}`)
    dispatch(increment())
    const stateAfter = getState()
    console.log(`Counter after: ${stateAfter.value}`)
}

store.dispatch(exampleThunkFunction)

const logAndAdd = amount => {
    return (dispatch, getState) => {
        const stateBefore = getState()
        console.log(`Counter before: ${stateBefore.value}`)
        dispatch(incrementByAmount(amount))
        const stateAfter = getState()
        console.log(`Counter after: ${stateAfter.value}`)
    }
}

store.dispatch(logAndAdd(5))
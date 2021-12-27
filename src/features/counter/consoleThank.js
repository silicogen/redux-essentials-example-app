
import  { increment, incrementByAmount } from "./counterSlice"
import store from "./store"

const exampleThunkFunction = (dispatch, getState) => {
    const stateBefore = getState()
    console.log(`Counter before: ${stateBefore.counter.value}`)
    dispatch(increment())
    const stateAfter = getState()
    console.log(`Counter after: ${stateAfter.counter.value}`)
}

store.dispatch(exampleThunkFunction)

const logAndAdd = amount => {
    return (dispatch, getState) => {
        const stateBefore = getState()
        console.log(`Counter before: ${stateBefore.counter.value}`)
        dispatch(incrementByAmount(amount))
        const stateAfter = getState()
        console.log(`Counter after: ${stateAfter.counter.value}`)
    }
}

store.dispatch(logAndAdd(5))
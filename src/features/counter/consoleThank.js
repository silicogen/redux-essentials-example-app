import { increment, incrementByAmount } from "./counterSlice"
import store from "./store"

console.log("Counter values")
store.subscribe(() => console.log(
    `by subscribe: ${store.getState().counter.value}`));

const exampleThunkFunction = (dispatch, getState) => {
    const stateBefore = getState()
    console.log(`before increment: ${stateBefore.counter.value}`)
    dispatch(increment())
    const stateAfter = getState()
    console.log(`after  increment: ${stateAfter.counter.value}`)
}

const logAndAdd = amount => {
    return (dispatch, getState) => {
        const stateBefore = getState()
        console.log(`before incrementByAmount(${amount}): ${stateBefore.counter.value}`)
        dispatch(incrementByAmount(amount))
        const stateAfter = getState()
        console.log(`after  incrementByAmount(${amount}): ${stateAfter.counter.value}`)
    }
}

store.dispatch(increment())
store.dispatch(incrementByAmount(-1))

store.dispatch(exampleThunkFunction)
store.dispatch(logAndAdd(5))

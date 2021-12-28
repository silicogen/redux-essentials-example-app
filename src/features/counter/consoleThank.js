import {
    increment, incrementByAmount,
    exampleThunkFunction, logAndAdd
} from "./counterSlice"
import store from "./store"


store.subscribe(() => console.log(
    `by subscribe: ${store.getState().counter.value}`));

console.log("Counter values")

store.dispatch(increment())
store.dispatch(incrementByAmount(-1))

store.dispatch(exampleThunkFunction)
store.dispatch(logAndAdd(5))

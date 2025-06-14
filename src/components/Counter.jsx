export const Counter = ({increment, decrement})=>{
    return <>
    <button onClick={increment} type="button">increment</button>
    <button onClick={decrement} type="button">decrement</button>
    </>
}
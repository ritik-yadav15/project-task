
import { useMemo, useState } from "react";

// Question 1: what can you use for making pure component in functional component
// Ans: we can use useMemo

// Question 2: difference between useEffect and useMemo
// Ans: useEffect is a hook used in React for handling side effects, such as data fetching, subscribing to events, or manually manipulating the DOM.  AND
// useMemo is used for memoizing the result of a computation. It takes a function and a dependency list, and it returns the memoized value of that function.

const HookUseMemo = () => {
  const [count, setData] = useState(1)
  const [item, setItem] = useState(20)
  // useMemo use to increase performance of our application  and it always return a memoised value.



// we want to all this function when update item is clicked
  // function appleTime() {
  //   console.warn("Hello")
  //   return 100 * count;
  // }
  const appleTime = useMemo(
    function appleTime() {
      console.warn("Hello")
      return 100 * count;
    }
  ,[item])
  
  return (
    <>
      <div className="App">
      <h1>Hooks in React {count}</h1>
      {appleTime}
      {/* {appleTime()} */}
      <button onClick={() => setData(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update State</button>

    </div>
    </>
  );
};

export default HookUseMemo;
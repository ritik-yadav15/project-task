
import { useState,useEffect } from 'react'
const HookUseEffect= () => {

   // const [count, setCount] = useState(0)

   // usestate return us a array with two value one is state and second is function which use to set that state we have to give initial state which 0
  const [count, setCount] = useState({
    num:1,
    id:"abc"
  })



const handleAdd = () => {

//  it is shallow copy
  setCount((prev)=>{
    return{
      ...prev ,
      num: prev.num + 1
    }
  }
  
  )

// setCount(count + 1); // the state which is updating there asynchronous it is not updating instantly
// setCount(count + 1); // if write it twice it will one  its going to update once 
// setCount((prev) => prev + 1); // so for updating instantly setCount takes callback which inside of callback it takes previous state as props
// setCount((prev) => prev + 1); // see its update twice use this if you wanted to update state synchronously


}

const handleSubstract = () => {

  // setCount((prev) => prev - 1);
// setCount(count - 1);
// setCount(count - 1);
setCount((prev)=>{
  return{
    ...prev ,
    num: prev.num - 1
  }
})

}

// useEffect takes two things one is callback and second is array of dependency

const [screenSize, setScreenSize] = useState(window.innerWidth);

useEffect(() => {
    const handleResize = () => {
        setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // unmount 
    //  This is the cleanup function
    // It will be called when the component is unmounted

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, [screenSize]);


  return (
    <>
    <button onClick={handleAdd}>+</button>
    <span>{count.num}</span>
    <button onClick={handleSubstract}>-</button>
    <div>

    <span>{screenSize}</span>
    </div>

    </>
  )
}

export default HookUseEffect

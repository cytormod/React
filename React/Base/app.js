//A Piece of the User Interface.
// This functions in React can return something called JSX Which is the syntax looks like html

// State: it's the most fundamental concept of React. Whenever we need Something to change in the user Interface we change the STATE.

import { useEffect, useState } from "react";

export default function App() {
    const [advice, setAdvice] = useState("");
    const [count, setCount] = useState(0);

    async function getAdvice () {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json();
        // console.log(data.slip.advice);
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    }

// useEffect takes 2 arguments, 1st a function that we want to get executed at the beginning, 2nd is dependency Array

// props is basically a parameter to a function.

    useEffect(function() {
        getAdvice();
    }, [])

    return (
        <div>
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Get advice</button>
             {/* <p>
                You have read <strong>{count}</strong> pieces of advice 
            </p>  */}
            <Message count={count}/>
        </div>
    );
}

function Message (props) {
    return (
        <p>
                You have read <strong>{props.count}</strong> pieces of advice 
            </p>
    );
}

import {useEffect, useState} from 'react';

function useCounter(initialCount: number) {
    const [count, setCounter] = useState(initialCount);

    useEffect(() => {
        console.log(count)
    }, [count]);

    const increment = () => {
        setCounter(count + 1);
    }
    return {count, increment};
}

export default useCounter
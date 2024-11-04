import Button, {ButtonType} from '../components/Button';
import useCounter from '../hooks/useCounter';

interface CounterProps {
    initialCount: number
}

function CounterPage({initialCount}: CounterProps) {
    const {count, increment} = useCounter(initialCount);

    return (<div>
            <h1>Count is {count}</h1>
            <Button onClick={increment} type={ButtonType.PRIMARY}>Increment</Button>
        </div>
    )

}

export default CounterPage
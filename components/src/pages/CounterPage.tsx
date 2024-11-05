import Button, {ButtonType} from '../components/Button';
import {ChangeEvent, FormEvent, FormEventHandler, useState} from 'react';
import Panel from '../components/Panel';

interface CounterProps {
    initialCount: number
}

function CounterPage({initialCount}: CounterProps) {
    const [count, setCount] = useState(initialCount);
    const [valueToAdd, setValueToAdd] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    const handleForm = (event: FormEvent) => {
        event.preventDefault();
        setCount(count + valueToAdd)
        setValueToAdd(0)
    }

    const inputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setValueToAdd(event.target.valueAsNumber)
    }

    return (<Panel className={'m-3'}>
            <h1 className={'text-lg'}>Count is {count}</h1>
            <div className={'flex flex-row'}>
                <Button onClick={increment} type={ButtonType.PRIMARY}>Increment</Button>
                <Button onClick={decrement} type={ButtonType.SECONDARY}>Decrement</Button>
            </div>
            <form onSubmit={handleForm}>
                <label>Add a lot!!</label>
                <input value={valueToAdd} onInput={inputChanged} type="number" className={'p-1 m-3 bg-gray-50 border border-gray-300'}/>
                <Button type={ButtonType.PRIMARY} rounded outline>Add it!</Button>
            </form>
        </Panel>
    )

}

export default CounterPage
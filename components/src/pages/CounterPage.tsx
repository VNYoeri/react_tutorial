import Button, {ButtonType} from '../components/Button';
import {ChangeEvent, FormEvent, Reducer, useReducer} from 'react';
import Panel from '../components/Panel';

interface CounterProps {
    initialCount: number
}
enum ActionType {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    UPDATE_VALUE_TO_ADD
}

interface Dispatch {
    type: ActionType,
    payload: number
}


interface CounterState {
    count: number,
    valueToAdd: number
}

const reducer = (state: CounterState, action: Dispatch) => {

    switch (action.type) {
        case ActionType.INCREMENT_COUNT: return {...state, count: state.count + action.payload}
        case ActionType.DECREMENT_COUNT: return {...state, count: state.count - action.payload}
        case ActionType.UPDATE_VALUE_TO_ADD: return {...state, valueToAdd: action.payload}
    }
};

function CounterPage({initialCount}: CounterProps) {
    const [state, dispatch] = useReducer<Reducer<CounterState, Dispatch>>(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    const increment = () => {
        dispatch({type: ActionType.INCREMENT_COUNT, payload: 1})
    }
    const decrement = () => {
        dispatch({type: ActionType.DECREMENT_COUNT, payload: 1})
    }

    const handleForm = (event: FormEvent) => {
        event.preventDefault();
        dispatch({type: ActionType.INCREMENT_COUNT, payload: state.valueToAdd})
        dispatch({type: ActionType.UPDATE_VALUE_TO_ADD, payload: 0})
    }

    const inputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: ActionType.UPDATE_VALUE_TO_ADD, payload: event.target.valueAsNumber})
    }

    return (<Panel className={'m-3'}>
            <h1 className={'text-lg'}>Count is {state.count}</h1>
            <div className={'flex flex-row'}>
                <Button onClick={increment} type={ButtonType.PRIMARY}>Increment</Button>
                <Button onClick={decrement} type={ButtonType.SECONDARY}>Decrement</Button>
            </div>
            <form onSubmit={handleForm}>
                <label>Add a lot!!</label>
                <input value={state.valueToAdd} onInput={inputChanged} type="number" className={'p-1 m-3 bg-gray-50 border border-gray-300'}/>
                <Button type={ButtonType.PRIMARY} rounded outline>Add it!</Button>
            </form>
        </Panel>
    )

}

export default CounterPage
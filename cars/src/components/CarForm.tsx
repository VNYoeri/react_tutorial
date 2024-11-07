import {save, AppDispatch, changeCost, changeName, RootState} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {Car} from '../domain/Car';
import {ChangeEvent, FormEvent} from 'react';

function CarForm() {
    const dispatch: AppDispatch = useDispatch();

    const car: Car = useSelector((state: RootState) => {
        return state.form;
    })

    const nameChanged = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeName({...car, name: event.target.value}))
    }

    const costChanged = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCost({...car, cost: event.target.valueAsNumber}))
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(save(car))
    }

    return <div className='car-form panel'>
        <h4 className='subtitle is-3'>Add Car</h4>
        <form onSubmit={handleSubmit}>
        <div className='field-group'>
            <div className='field'>
                <label className='label'>Name</label>
                <input value={car?.name} onChange={nameChanged} type='text' id='carName' className='input is-expanded'/>
            </div>
            <div className='field'>
                <label className='label'>Cost</label>
                <input value={car?.cost || ''} onChange={costChanged} type='number' id='carCost'  className='input is-expanded'/>
            </div>
        </div>
            <div className='field'>
                <button className='button is-link' type='submit'>Submit</button>
            </div>
        </form>
    </div>
}

export default CarForm;
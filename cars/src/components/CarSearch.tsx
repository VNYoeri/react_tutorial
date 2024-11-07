import {changeSearchTerm} from '../store';
import {ChangeEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/store';

function CarSearch() {
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => {
        return state.cars.searchTerm;
    })

    const search = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchTerm(event.target.value))
    }


    return <div className='list-header'>
        <h3 className='title is-3'>My Cars</h3>
        <div className='search field is-horizontal'>
            <label className='label'>Search</label>
            <input type='text' value={searchTerm} onChange={search} className='input'/>
        </div>
    </div>
}

export default CarSearch;
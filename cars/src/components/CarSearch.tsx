import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, changeSearchTerm, RootState} from '../store';
import {ChangeEvent} from 'react';

function CarSearch() {
    const dispatch: AppDispatch = useDispatch();
    const searchTerm = useSelector((state: RootState) => {
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
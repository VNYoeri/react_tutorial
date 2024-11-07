import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, removeCar, RootState} from '../store';
import {Cars} from '../domain/Cars';
import {Car} from '../domain/Car';

function CarList() {
    const dispatch: AppDispatch = useDispatch();
    const filteredCars: Cars = useSelector((state: RootState) => {
        return state.cars;
    })

    const handleRemoveCar = (car: Car) => {
        dispatch(removeCar(car))
    }

    const renderedCars = filteredCars.cars.filter(car => filteredCars.searchTerm === '' || car.name.includes(filteredCars.searchTerm)).map(car => {
            return <div key={car.id} className='panel'>
                <p>{car.name} - &#x20AC;{car.cost}</p>
                <button className="button is-danger" onClick={() => handleRemoveCar(car)}>Delete</button>
            </div>
        }
    )


    return <div className='car-list'>
        {renderedCars}
        <hr/>
    </div>

}

export default CarList;
import {AppDispatch, removeCar, RootState} from '../store';
import {Car} from '../domain/Car';
import {useAppDispatch, useAppSelector} from '../hooks/store';
import {createSelector} from '@reduxjs/toolkit';


const filteredCars = createSelector([(state: RootState) => state.cars.data, (state: RootState) => state.cars.searchTerm],
    (cars, searchTerm) =>
        cars?.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
);

function CarList() {
    const dispatch: AppDispatch = useAppDispatch();

    const cars = useAppSelector(filteredCars);
    const name = useAppSelector((state) => state.form.name)

    const handleRemoveCar = (car: Car) => {
        dispatch(removeCar(car))
    }

    const renderedCars = cars?.map(car => {
            let matches = name && car.name.toLowerCase().includes(name.toLowerCase());

            return <div key={car.id} className={`panel ${matches && 'bold'}`}>
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
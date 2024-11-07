import {useAppSelector} from '../hooks/store';

function CarValue() {
    const carTotalCost: number = useAppSelector((state) => {
        return state.cars?.data?.filter(car => car.name.includes(state.cars.searchTerm)).map(car => car.cost).reduce((x, y) => x + y, 0);
    })

    return <div className='car-value'>
        Total value: &#x20AC; {carTotalCost}
    </div>

}

export default CarValue;
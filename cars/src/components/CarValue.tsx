import {useSelector} from 'react-redux';
import {RootState} from '../store';

function CarValue() {
    const carTotalCost: number = useSelector((state: RootState) => {
        return state.cars.cars.map(car => car.cost).reduce((x, y) => x + y, 0);
    })

    return <div>Total value: &#x20AC; {carTotalCost}</div>

}

export default CarValue;
import Table, {ColumnConfiguration} from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage() {

    const fruits = new Fruits();
    const vehicles = new Vehicles()

    return (<div>
        <SortableTable data={fruits.data()} columns={fruits.config()} keyFn={fruits.keyFn()}/>
        <Table data={vehicles.data()} columns={vehicles.config()} keyFn={vehicles.keyFn()}/>
    </div>)
}

interface TableElement {
    data(): any[],
    config(): ColumnConfiguration[],
    keyFn(): {}
}

class Vehicles implements TableElement {

    data(): any[] {
        return [
            {
                name: 'Truck',
                price: 15000,
                discount: .1,
                img: 'truck.png'
            },
            {
                name: 'Car',
                price: 15000,
                discount: .15,
                img: 'car.png'
            },
            {
                name: 'Boat',
                price: 15000,
                discount: .02,
                img: 'boat.png'
            }
        ]
    }

    config(): ColumnConfiguration[] {
        return [
            {
                label: 'Vehicle',
                render: (vehicle) => vehicle.name
            },
            {
                label: 'Price',
                render: (vehicle) => vehicle.price
            },
            {
                label: 'Discounted price',
                render: (vehicle) => vehicle.price * (1 - vehicle.discount)
            },
            {
                label: 'Image',
                render: (vehicle) => vehicle.img
            }
        ]
    }

    keyFn() {
        return (vehicle: any) => {
            return vehicle.name;
        }
    }
}

class Fruits implements TableElement {

    data(): any[] {
        return [
            {name: 'Orange', color: 'bg-orange-500', score: 5},
            {name: 'Apple', color: 'bg-red-500', score: 3},
            {name: 'Banana', color: 'bg-yellow-500', score: 1},
            {name: 'Lime', color: 'bg-green-500', score: 4}
        ];
    }

    config(): ColumnConfiguration[] {
        return [
            {
                label: 'Fruits',
                render: (fruit) => fruit.name,
                sortValue: (fruit) => fruit.name
            },
            {
                label: 'Color',
                render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}/>
            },
            {
                label: 'Score',
                render: (fruit) => fruit.score,
                sortValue: (fruit) => fruit.score
            }
        ]
    }

    keyFn() {
        return (fruit: any) => {
            return fruit.name;
        }
    }
}

export default TablePage
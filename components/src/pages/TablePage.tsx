import Table, {TableConfig} from '../components/Table';

function TablePage() {

    const fruits = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4}
    ]

    const fruitConfig: TableConfig[] = [
        {
            label: 'Fruits',
            render: (fruit) => fruit.name
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}/>
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score
        }
    ]

    const fruitKeyFn = (fruit: any) => {
        return fruit.name;
    }

    const vehicles = [
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

    const vehicleConfig: TableConfig[] = [
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

    const vehicleKeyFn = (vehicle: any) => {
        return vehicle.name;
    }

    return (<div>
        <Table data={fruits} columns={fruitConfig} keyFn={fruitKeyFn}/>
        <Table data={vehicles} columns={vehicleConfig} keyFn={vehicleKeyFn}/>
    </div>)
}

export default TablePage
import './css/App.css';
import React, {useState} from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['cat', 'dog', 'cow', 'gator', 'bird'];

    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
}

function App() {
    const [animals, addAnimal] = useState((): string[] => []);

    const handleClick = () => {
        addAnimal([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    })

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}

export default App;

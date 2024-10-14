import './css/AnimalShow.css';
import React from 'react'
import {useState} from 'react';
import cat from './svg/cat.svg'
import bird from './svg/bird.svg'
import dog from './svg/dog.svg'
import horse from './svg/horse.svg'
import cow from './svg/cow.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'

function AnimalShow({type}: AnimalType) {
    const [clicks, setClicks] = useState(0);

    function handleClick() {
        setClicks(clicks+1);
    }

    return (<div className="animal-show" onClick={handleClick}>
        <img className="animal" src={svgMap.find(type)} alt={type}/>
        <img className="heart" src={heart} alt="heart" style={{
            width: 10 + 10 * clicks + 'px'
        }}/>
    </div>)
}

interface AnimalType {
    type: string;
}

const svgMap = {
    find(key: string){
        switch (key) {
            case 'cat': return cat;
            case 'bird': return bird;
            case 'dog': return dog;
            case 'horse': return horse;
            case 'cow': return cow;
            case 'gator': return gator;
        }
    }
}

export default AnimalShow
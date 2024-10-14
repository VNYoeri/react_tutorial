import React, {useState} from 'react';
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term: string) => {
        return await searchImages(term).then(r => {
            setImages(r)
        });
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </div>
    )
}

export default App
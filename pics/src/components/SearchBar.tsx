import './SearchBar.css';
import {ChangeEvent, FormEvent, useState} from "react";

interface onSubmitProp {
    onSubmit: (term: string) => {}
}

function SearchBar({onSubmit}: onSubmitProp) {
    const [term, setTerm] = useState('');

    const handleFormSubmission = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(term)
    }

    const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value)
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmission}>
                <label>Enter search term</label>
                <input value={term} onChange={handleInputChanged} placeholder='What images do you want to look up?' />
            </form>
        </div>
    )
}

export default SearchBar
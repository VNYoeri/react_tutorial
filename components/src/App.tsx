import React from "react";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from './pages/DropdownPage';

function App() {
    return (
        <div>
            <h3 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>Button:</h3>
            <ButtonPage/>
            <hr className='border-4 border-b-emerald-700'/>
            <div>
                <h3 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>Accordion:</h3>
                <AccordionPage/>
            </div>
            <hr className='border-4 border-b-emerald-700'/>
            <div>
                <h3 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>Dropdown:</h3>
                <DropdownPage/>
            </div>
        </div>

    )
}

export default App
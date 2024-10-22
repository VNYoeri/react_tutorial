import Dropdown, {DropdownOption} from '../components/Dropdown';
import {useState} from 'react';

function DropdownPage() {
    const [selection, setSelection] = useState<DropdownOption>()

    const select = (option: DropdownOption) => {
        setSelection(option);
    }

    return <Dropdown
        value={selection}
        onChange={select}
        options={[
            {label: 'Red', value: 'red'},
            {label: 'Green', value: 'green'},
            {label: 'Blue', value: 'blue'}
        ]}/>
}

export default DropdownPage;
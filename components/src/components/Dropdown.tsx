import {Key, useState} from 'react';
import {GoChevronDown, GoChevronLeft} from 'react-icons/go';
import Panel from './Panel';

interface DropdownProps {
    options: DropdownOption[],
    value?: DropdownOption,
    onChange: (option: DropdownOption) => void
}

function Dropdown({options, value, onChange}: DropdownProps) {
    const [open, setOpen] = useState(false)

    const select = (option: DropdownOption) => {
        toggle();
        onChange(option);
    }

    const toggle = () => {
        setOpen((currentIsOpen) => !currentIsOpen)
    }

    const dropdownOptions = options.map((option) => {
        return (
            <div key={option.value}>
                <div onClick={() => select(option)} className='hover:bg-sky-100 rounded cursor-pointer p-1'>
                    {option.label}
                </div>
            </div>
        )
    })

    let icon = <span className='text-lg'>{open ? <GoChevronLeft/> : <GoChevronDown/>}</span>;

    return (
        <div className='w-48 relative'>
            <Panel onClick={toggle} className='flex justify-between items-center cursor-pointer'>
                {value?.label || 'Select...'} {icon}
            </Panel>
            {open && <Panel className='absolute top-full'>{dropdownOptions}</Panel>}
        </div>
    )
}

export interface DropdownOption {
    value: Key,
    label: string
}

export default Dropdown;
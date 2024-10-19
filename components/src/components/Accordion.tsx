import {useState} from 'react';
import {GoChevronDown, GoChevronLeft} from 'react-icons/go';

interface AccordionContent {
    id: string,
    label: string,
    content: string
}

interface AccordionProps {
    items: AccordionContent[]
}

function Accordion({items}: AccordionProps) {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    function expand(index: number) {
        if (expandedIndex === index) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        let icon = <span className='text-xl'>{isExpanded ? <GoChevronLeft/> : <GoChevronDown/>}</span>;
        return (
            <div key={item.id}>
                <div onClick={() => expand(index)} className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        )
    });

    return <div className='border-x border-t rounded'>
        {renderedItems}
    </div>
}

export default Accordion
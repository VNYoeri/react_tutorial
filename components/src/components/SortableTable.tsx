import Table, {TableProps} from './Table';
import {useState} from 'react';
import {GoArrowDown, GoArrowUp} from 'react-icons/go';

function icons(label: any, sortBy: any, sortOrder: SortOrder) {
    if (label !== sortBy || sortOrder === SortOrder.UNSORTED) {
        return <div><GoArrowUp/><GoArrowDown/></div>
    } else if (sortOrder === SortOrder.ASCENDING) {
        return <div><GoArrowUp/></div>
    }
    return <div><GoArrowDown/></div>
}

enum SortOrder {
    UNSORTED,
    ASCENDING,
    DESCENDING
}

function SortableTable({...props}: TableProps) {
    const {columns, data} = props;
    const [sortOrder, setSortOrder] = useState(SortOrder.UNSORTED);
    const [sortBy, setSortBy] = useState<string | null>('');

    const sort = (label: string) => {
        if (label === sortBy) {
            switch (sortOrder) {
                case SortOrder.UNSORTED:
                    setSortOrder(SortOrder.ASCENDING);
                    break;
                case SortOrder.ASCENDING:
                    setSortOrder(SortOrder.DESCENDING);
                    break;
                case SortOrder.DESCENDING:
                    setSortOrder(SortOrder.UNSORTED);
                    break;
            }
        } else {
            setSortBy(label);
            setSortOrder(SortOrder.ASCENDING)
        }
    }

    const updatedColumns = columns.map(c => {
        if (c.sortValue) {
            return {
                ...c,
                header: (<th onClick={() => sort(c.label)} className={'cursor-pointer hover:bg-gray-300'}>
                    <div className={'flex items-center'}> {icons(c.label, sortBy, sortOrder)} {c.label}</div>
                </th>)
            }
        }
        return c;
    })

    let sortedData = data;
    if (sortBy && sortOrder !== SortOrder.UNSORTED) {
        const {sortValue} = columns.find(c => c.label === sortBy) || {};
        if (sortValue) {
            sortedData = [...data].sort((a, b) => {
                const valueA = sortValue(a);
                const valueB = sortValue(b);

                const reverseOrder = sortOrder === SortOrder.ASCENDING ? 1 : -1;

                if (typeof valueA === 'string') {
                    return valueA.localeCompare(valueB) * reverseOrder
                }
                return (valueA - valueB) * reverseOrder;
            })
        }
    }

    return <Table {...props} columns={updatedColumns} data={sortedData}/>
}

export default SortableTable
import Table, {TableProps} from './Table';
import {useState} from 'react';
import {GoArrowDown, GoArrowUp} from 'react-icons/go';
import SortOrder from '../enums/SortOrder';
import useSort from '../hooks/useSort';

function icons(label: any, sortBy: any, sortOrder: SortOrder) {
    if (label !== sortBy || sortOrder === SortOrder.UNSORTED) {
        return <div><GoArrowUp/><GoArrowDown/></div>
    } else if (sortOrder === SortOrder.ASCENDING) {
        return <div><GoArrowUp/></div>
    }
    return <div><GoArrowDown/></div>
}



function SortableTable({...props}: TableProps) {
    const {config, data} = props;
    const {sortOrder, sortBy, sortColumn, sortedData} = useSort(data, config);

    const updatedConfig = config.map(c => {
        if (c.sortValue) {
            return {
                ...c,
                header: (<th onClick={() => sortColumn(c.label)} className={'cursor-pointer hover:bg-gray-300'}>
                    <div className={'flex items-center'}> {icons(c.label, sortBy, sortOrder)} {c.label}</div>
                </th>)
            }
        }
        return c;
    })

    return <Table {...props} config={updatedConfig} data={sortedData}/>
}

export default SortableTable
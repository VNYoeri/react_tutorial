import {useState} from 'react';
import SortOrder from '../enums/SortOrder';
import {ColumnConfiguration} from '../components/Table';


function useSort(data: any[], columns: ColumnConfiguration[]) {
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

    return {sortOrder, sortBy, sortColumn: sort, sortedData};
}

export default useSort;
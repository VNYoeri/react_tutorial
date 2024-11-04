import {Fragment} from 'react';

interface TableProps {
    data: any[],
    columns: ColumnConfiguration[],
    keyFn: (fn: any) => any
}

interface ColumnConfiguration {
    header?: any,
    label: string,
    render: ({}: any) => any,
    sortValue?: ({}: any) => any
}

function Table({data, columns, keyFn}: TableProps) {

    const headers = columns.map(column => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header}</Fragment>
        }
        return <th key={column.label}>{column.label}</th>
    })

    const rows = data.map(rowData => {
        const cellContents = columns.map(column => {
            return <td key={column.label} className='p-2'>{column.render(rowData)}</td>
        });

        return <tr key={keyFn(rowData)} className='border-b'>
            {cellContents}
        </tr>
    });

    return <table className='table-auto border-spacing-2'>
        <thead>
        <tr className='border-b-2'>
            {headers}
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </table>
}

export type {ColumnConfiguration, TableProps};
export default Table
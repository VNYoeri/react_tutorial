interface TableProps {
    data: any[],
    columns: TableConfig[],
    keyFn: (fn: any) => any
}

interface TableConfig {
    label: string,
    render: ({}: any) => any,
    sort?: any
}

function Table({data, columns, keyFn}: TableProps) {

    const headers = columns.map(column => {
        return <th key={column.label}>{column.label}</th>
    })

    const rows = data.map(rowData => {
        const cellContents = columns.map(column => {
            return <td key={column.label} className='p-2'>{column.render(rowData)} </td>
        })

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

export type {TableConfig};
export default Table
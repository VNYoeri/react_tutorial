import {ReactNode} from 'react';

interface ProviderProps {
    children: ReactNode,
    className: string,
    [x:string]: any
}

function Panel({children, className, ...rest}: ProviderProps) {

    return <div {...rest} className={`border rounded p-3 shadow bg-white w-full ${className}`}>
        {children}
    </div>
}

export default Panel
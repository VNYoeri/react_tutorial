import {MouseEvent} from 'react';
import useNavigation from '../hooks/useNavigationHook';

interface LinkProps {
    to: string,
    children: any,
    activeClassName: string,
    [x:string]: any
}

function Link({to, children, activeClassName, ...rest}: LinkProps) {
    const {navigate, currentPath} = useNavigation();
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return (
        <a href={to} className={`text-blue-500 ${rest.className} ${currentPath === to && activeClassName}`} onClick={handleClick}>{children}</a>
    )
}

export default Link;
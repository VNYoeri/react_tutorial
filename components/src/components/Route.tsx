import useNavigationHook from '../hooks/useNavigationHook';

interface RouteProps {
    path: string,
    children: any
}

function Route({path, children}: RouteProps) {
    const {currentPath} = useNavigationHook();

    return path === currentPath ? children : null
}

export default Route
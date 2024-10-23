import {createContext, useEffect, useState} from 'react';

const NavigationContext = createContext<NavigationContextType>({
    currentPath: '',
    navigate(): void {}

});

interface NavigationContextType {
    currentPath: string,
    navigate(to: string): void;
}

function NavigationProvider({children}: any) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const handleBackNavigation = () => {
            setCurrentPath(window.location.pathname)
        };

        window.addEventListener('popstate', handleBackNavigation);

        return () => {
            window.removeEventListener('popstate', handleBackNavigation)
        }
    }, []);

    const navigate = (to: string) => {
        window.history.pushState({} , '', to)
        setCurrentPath(to)
    }

    return <NavigationContext.Provider value={{currentPath, navigate}}>
        { children }
    </NavigationContext.Provider>

};

export { NavigationProvider };
export default NavigationContext;
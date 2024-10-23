import {useContext} from 'react';
import NavigationContext from '../context/NavigationContext';


function useNavigationHook() {
    return useContext(NavigationContext);
}

export default useNavigationHook;
import {carsReducer, changeSearchTerm, removeCar} from './slices/carsSlice';
import {changeCost, changeName, formReducer} from './slices/formSlice';
import {configureStore} from '@reduxjs/toolkit';
import {save} from './actions';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, removeCar, changeName, changeCost, changeSearchTerm, save};
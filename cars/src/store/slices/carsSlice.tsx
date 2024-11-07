import {createSlice, nanoid} from '@reduxjs/toolkit';
import {Car} from '../../domain/Car';
import {Cars} from '../../domain/Cars';
import {save} from '../actions';


const carsSlice = createSlice({
    name: "cars",
    initialState: {
        cars: [],
        searchTerm: ''
    } as Cars,
    reducers: {
        removeCar(state, action: { payload: Car, type: string }) {
            return {...state, cars: state.cars.filter(c => c.id !== action.payload.id)};
        },
        changeSearchTerm(state, action: {payload: string, type: string}) {
            return {...state, searchTerm: action.payload}
        }
    },
    extraReducers(builder) {
        builder.addCase(save, (state, action: { payload: Car, type: string }) => {
            return {...state, cars: [...state.cars, {...action.payload, id: nanoid()}]};
        })
    }
});

export const carsReducer = carsSlice.reducer;
export const {removeCar, changeSearchTerm} = carsSlice.actions;
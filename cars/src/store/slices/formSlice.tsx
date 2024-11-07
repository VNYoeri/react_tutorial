import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit';

import {Car} from '../../domain/Car';
import {save} from '../actions';


const formSlice = createSlice({
    name: 'form',
    initialState: {name: '', cost: 0} as Car,
    reducers: {
        changeName(state, action: PayloadAction<Car>) {
            return {
                ...state,
                name: action.payload.name
            }
        },
        changeCost(state, action: PayloadAction<Car>) {
            return {
                ...state,
                cost: action.payload.cost
            }
        }
    }, extraReducers(builder) {
        builder.addCase(save, () => ({name: '', cost: 0} as Car))
    }
})

export const formReducer = formSlice.reducer;
export const {changeName, changeCost} = formSlice.actions;
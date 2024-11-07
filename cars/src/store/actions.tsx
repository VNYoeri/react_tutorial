import {createAction} from '@reduxjs/toolkit';
import {Car} from '../domain/Car';

export const save = createAction<Car>('app/addCar');
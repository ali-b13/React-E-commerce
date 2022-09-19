import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import UserSlice from './Slices/UserSlice'
const store=configureStore({
  reducer:{
    user:UserSlice
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
export default store
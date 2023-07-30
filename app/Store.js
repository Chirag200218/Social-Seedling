import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../redux/UserSlice'

// enableMapSet();
export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
})

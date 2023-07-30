import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id:null,
    username:null,
    name:null,
    email:null,
    headline:null,
    image:null,
    location:null,
    total_photos:0,
    followers_count:0,
    following_count:0,
    photos:[],
    likes:[],
    interest:[]
  }

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        CreateId:(state,action)=>{
          return {
            ...state,
            id: action.payload?.id,
            username:action.payload?.username,
            name: action.payload?.name,
            email: action.payload?.email,
            image:  action.payload?.image,
            headline:action.payload?.headline,
            location:action.payload?.location,
            total_photos:action.payload?.total_photos,
            followers_count:action.payload?.followers_count,
            following_count:action.payload?.following_count,
            photos:action.payload?.photos,
            interest:action.payload?.interest,
            likes:action.payload?.likes,
          }
        },
        updateLikeIds:(state,action)=>{
          return{
            ...state,
            
          }
        },
        reset:(state,action)=>{
          return initialState;
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {CreateId,updateLikeIds,reset} = UserSlice.actions
  
  export default UserSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateMovie{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bannerData: any ,
    imageUrl: string

}

const initialState : initialStateMovie = {
    bannerData : [],
    imageUrl : ''
};

export const movieoSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setBannerData: (state, action: PayloadAction<any>)=>{
            state.bannerData = action.payload
        },
        setImageUrl:(state, action: PayloadAction<string>)=>{
            state.imageUrl = action.payload
        }
        
    }
})

export const { setBannerData, setImageUrl } = movieoSlice.actions;

export default movieoSlice.reducer;
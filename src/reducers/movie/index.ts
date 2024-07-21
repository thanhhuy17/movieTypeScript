// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface initialStateMovie {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     bannerData: any[],
//     imageUrl: string
// }

// const initialState: initialStateMovie = {
//     bannerData: [],
//     imageUrl: ''
// };

// export const movieoSlice = createSlice({
//     name: 'movie',
//     initialState,
//     reducers: {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         setBannerData: (state, action: PayloadAction<any>) => {
//             state.bannerData = action.payload
//         },
//         setImageUrl: (state, action: PayloadAction<string>) => {
//             state.imageUrl = action.payload
//         }

//     }
// })

// export const { setBannerData, setImageUrl } = movieoSlice.actions;

// export default movieoSlice.reducer;


//////////----------------------------------------------------------
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa type cho mỗi phần tử trong bannerData
interface BannerItem {
  //  Thêm các thuộc tính cần thiết cho bannerData
  id: number;
  backdrop_path: string;
  // ... các thuộc tính khác
  name: string;
  title: string;
  overview: string;
  vote_average: number;
  popularity: number,
}

export interface initialStateMovie {
  bannerData: BannerItem[]; // Sử dụng BannerItem[] 
  imageUrl: string;
  
}

const initialState: initialStateMovie = {
  bannerData: [],
  imageUrl: '',
};

export const movieoSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setBannerData: (state, action: PayloadAction<BannerItem[]>) => { // Sử dụng BannerItem[] trong PayloadAction
      state.bannerData = action.payload;
    },
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setBannerData, setImageUrl } = movieoSlice.actions;

export default movieoSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import { movieoSlice, initialStateMovie } from "../reducers/movie";


// Cập nhật RootState để sử dụng initialStateMovie
export interface RootState {
    movie: initialStateMovie; // Sử dụng initialStateMovie
}

const store = configureStore<RootState>({
    reducer: {
        movie: movieoSlice.reducer
    }
});
export default store







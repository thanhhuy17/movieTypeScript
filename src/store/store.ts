import { configureStore } from "@reduxjs/toolkit";
import { movieoSlice } from "../reducers/movie";

interface RootState{
    movie:  ReturnType<typeof movieoSlice.reducer>;
}

const store = configureStore<RootState>({
    reducer: {
        movie: movieoSlice.reducer
    }
});
export default store

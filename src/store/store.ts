import { configureStore } from "@reduxjs/toolkit";
import slidesReducer from "./slidesSlice"; // Importez le reducer des slides


const store = configureStore({
  reducer: {
    slides: slidesReducer, // Ajoutez le reducer des slides ici
  },
});


export type RootState = ReturnType<typeof store.getState>; // Pour obtenir l'état global
export type AppDispatch = typeof store.dispatch; // Pour le typage du dispatch

export default store;

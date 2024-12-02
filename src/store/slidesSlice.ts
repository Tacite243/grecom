import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface pour un slide
interface Slide {
    id: number;
    title: string;
    description: string;
    button: {
        text: string;
        link: string;
    };
}

// Interface pour l'état des slides
interface SlidesState {
    slides: Slide[];
}

const initialState: SlidesState = {
    slides: [
        {
            id: 1,
            title: "Bienvenue sur notre plateforme",
            description: "Nous offrons des services de qualité pour vous accompagner.",
            button: {
                text: "Commencer",
                link: "#about",
            },
        },
        {
            id: 2,
            title: "Explorez nos fonctionnalités",
            description: "Découvrez tout ce que nous avons à offrir.",
            button: {
                text: "En savoir plus",
                link: "#services",
            },
        },
    ],
};

const slidesSlice = createSlice({
    name: "slides",
    initialState,
    reducers: {
        // Action pour mettre à jour un slide spécifique
        updateSlide: (state, action: PayloadAction<{ id: number; data: Partial<Slide> }>) => {
            const { id, data } = action.payload;
            const index = state.slides.findIndex((slide) => slide.id === id);
            if (index !== -1) {
                state.slides[index] = { ...state.slides[index], ...data };
            }
            // Persister dans localStorage
            if (typeof window !== "undefined") {
                localStorage.setItem("slides", JSON.stringify(state.slides));
            }
        },
        // Charger les slides à partir de localStorage
        loadSlides: (state) => {
            if (typeof window !== "undefined") {
                const storedSlides = localStorage.getItem("slides");
                if (storedSlides) {
                    state.slides = JSON.parse(storedSlides);
                } else {
                    localStorage.setItem("slides", JSON.stringify(state.slides)); // Sauvegarder l'état initial
                }
            }
        },
    },
});

export const { updateSlide, loadSlides } = slidesSlice.actions;
export default slidesSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";

import globalSlicer from './../slice/globalSlicer'

export const store = configureStore({
    reducer: {
        global: globalSlicer
    }
})